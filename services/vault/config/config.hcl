storage "raft" {
  path = "./vault/data"
  node_id = "node1"
}

listener "tcp" {
  address = "0.0.0.0:8200"
  tls_disable = "true"
}

api_addr="http://vault:8200"
cluster_addr="https://vault:8201"

ui = true