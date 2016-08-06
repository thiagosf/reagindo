systems({
  reagindo: {
    depends: ['api'],
    image: {"docker": "azukiapp/node:5.2.0"},
    provision: [
      "npm install",
    ],
    workdir: "/azk/#{manifest.dir}",
    shell: "/bin/bash",
    command: ["npm", "start"],
    wait: 20,
    mounts: {
      '/azk/#{manifest.dir}': sync("."),
      '/azk/#{manifest.dir}/node_modules': persistent("./node_modules_azk"),
    },
    scalable: {"default": 1},
    http: {
      domains: [ "#{system.name}.#{azk.default_domain}" ]
    },
    ports: {
      http: "8000/tcp",
      livereload: "35729:35729/tcp"
    },
    envs: {
      NODE_ENV: "dev",
      PORT: "8000",
    },
  },
  api: {
    depends: [],
    image: {"docker": "azukiapp/node:5.2.0"},
    provision: [
      "npm install",
    ],
    workdir: "/azk/#{manifest.dir}",
    shell: "/bin/bash",
    command: ["npm", "start"],
    wait: 20,
    mounts: {
      '/azk/#{manifest.dir}': sync("./api"),
      '/azk/#{manifest.dir}/node_modules': persistent("./api/node_modules_azk"),
    },
    scalable: {"default": 1},
    http: {
      domains: [ "#{system.name}.#{azk.default_domain}" ]
    },
    ports: {
      http: "8000/tcp"
    },
    envs: {
      NODE_ENV: "dev",
      PORT: "8000",
    },
  },
});
