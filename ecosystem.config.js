module.exports = {
  apps: [
    {
      name: 'pimix-data',
      script: 'pimix-data/rest.js',
      cwd: '/usr/src/pimix',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '400M',
      env: {
        NODE_ENV: 'production'
      }
    },
    {
      name: 'pimix-scanner',
      script: 'pimix-data/scanner.js',
      cwd: '/usr/src/pimix',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '200M',
      env: {
        NODE_ENV: 'production'
      }
    },
    {
      name: 'pimix-wifi',
      script: 'pimix-data/wifi.js',
      cwd: '/usr/src/pimix',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '100M',
      env: {
        NODE_ENV: 'production'
      }
    },
    {
      name: 'pimix-router',
      script: 'pimix-router/router.js',
      cwd: '/usr/src/pimix',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '150M',
      env: {
        NODE_ENV: 'production'
      }
    },
    {
      name: 'pimix-player',
      script: 'start-player.sh',
      cwd: '/usr/src/pimix',
      interpreter: '/bin/bash',
      instances: 1,
      autorestart: true,
      watch: false,
      env: {
        NODE_ENV: 'production'
      }
    }
  ]
}
