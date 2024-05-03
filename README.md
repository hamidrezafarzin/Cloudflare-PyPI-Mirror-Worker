# Cloudflare PyPI Mirror Worker

Cloudflare PyPI Mirror Worker is a Cloudflare Worker script for setting up a mirror of the Python Package Index (PyPI) using Cloudflare Workers.

## Overview

This script intercepts requests to the PyPI simple index and files.pythonhosted.org, enabling faster access to Python packages by serving them through Cloudflare's global network.

## Usage

1. **Deploy the Worker**: Deploy this script as a Cloudflare Worker.

2. **Configuration**:
   - Set the Cloudflare Worker URL in the `workerURL` variable in the script to point to your deployed Cloudflare Worker.

3. **Deploying the Worker**:
   - Follow the instructions provided by Cloudflare to deploy the Worker.

4. **Accessing the Mirror**:
   - Once the Worker is deployed, requests to PyPI simple index and package files will be redirected through the Cloudflare Worker.


## Python Usage
Once deployed and running, you can use `pip` as follows:
(Replace 'worker_url.dev' with the actual URL of your worker url .)
```bash
 pip3 install --index-url https://worker_url.dev/pypi/simple package_name
```

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## License

This project is licensed under the [MIT License](LICENSE).
