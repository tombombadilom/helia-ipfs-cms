#!/usr/bin/env bash
# Parse command line arguments
NODE=21
MODE="development"
for i in "$@"
do
case $i in
    --user=*)
    username="${i#*=}"
    shift # past argument=value
    ;;
    --node=*)
    NODE="${i#*=}"
    shift # past argument=value
    ;;
    --mode=*)
    MODE="${i#*=}"
    shift # past argument=value
    ;;
    *)
    # unknown option
    ;;
esac
done

# Function to install shellcheck if it's not already installed
function install_shellcheck() {
    if ! command -v shellcheck &>/dev/null; then
        echo "Installing shellcheck..."
        # Checking the Linux distribution and installing shellcheck accordingly
        if [[ "$(uname -s)" == "Linux" ]]; then
            if [[ -f "/etc/debian_version" ]] || [[ -f "/etc/lsb-release" ]]; then
                # Debian or Ubuntu
                apt-get install -y shellcheck
            elif [[ -f "/etc/alpine-release" ]]; then
                # Alpine
                apk add --no-cache shellcheck
            elif [[ -f "/etc/os-release" ]]; then
                # Other Linux distributions
                # shellcheck disable=SC1091
                source /etc/os-release
                if [[ "$ID" == "ubuntu" || "$ID" == "debian" ]]; then
                    apt-get install -y shellcheck
                elif [[ "$ID" == "alpine" ]]; then
                    apk add --no-cache shellcheck
                else
                    echo "Unsupported Linux distribution."
                    exit 1
                fi
            else
                echo "Unsupported Linux distribution."
                exit 1
            fi
        elif [[ "$(uname -s)" == "Darwin" ]]; then
            # macOS
            brew install shellcheck
        else
            echo "Unsupported operating system."
            exit 1
        fi
    fi
}

# Calling the install_shellcheck function to install shellcheck
install_shellcheck

export NVM_DIR="$HOME/.nvm"
# Load nvm
# shellcheck disable=SC1091
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
# Load nvm bash_completion
# shellcheck disable=SC1091
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"



# Using a specific version of Node.js
if ! command -v node &> /dev/null; then
    echo "Node is not installed"
    nvm install "$NODE"
fi
if [[ "$(node -v)" != v"$NODE"* ]]; then
    echo "Installing Node.js version $NODE..."
    nvm install "$NODE"
fi
nvm use "$NODE"

# Check for pnpm and install the latest version if not present
if ! command -v pnpm &> /dev/null; then
    echo "pnpm not found, installing the latest version..."
    npm install -g pnpm@latest
fi

# Check for pm2 and install the latest version if not present
if ! command -v pm2 &> /dev/null; then
    echo "pm2 not found, installing the latest version..."
    npm install -g pm2@latest
fi

# Installing dependencies
pnpm install

# Building the project
pnpm build

# Setting ownership and permissions for the build directory
chown -R "$username":"$username" dist
chmod 755 dist