FROM gitpod/workspace-full:latest

RUN bash -c ". .nvm/nvm.sh     && nvm install 14.15.4     && nvm use 14.15.4     && nvm alias default 14.15.4"

RUN echo "nvm use default &>/dev/null" >> ~/.bashrc.d/51-nvm-fix