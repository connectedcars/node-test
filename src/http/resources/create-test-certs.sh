#!/bin/bash

set -eu

# Create server csr and sign a certificate
openssl req -new -nodes -x509 -newkey rsa:4096 -out localhost.crt -keyout localhost.key -days 3650 -subj '/CN=localhost/C=DK/ST=DK/L=Copenhagen/O=Connected Cars' -addext "subjectAltName = DNS:localhost,IP:127.0.0.1"
openssl x509 -in localhost.crt -text -noout

# Create Root ca for client certs
openssl ecparam -name prime256v1 -genkey -noout -out ca.key
openssl req -new -x509 -sha256 -key ca.key -out ca.crt -days 3650 -subj '/CN=Test Root CA/C=DK/ST=DK/L=Copenhagen/O=Connected Cars'
openssl x509 -in ca.crt -text -noout

# Create Client cert
openssl req -new -nodes -newkey rsa:4096 -out client.csr -keyout client.key -subj '/CN=client'
openssl x509 -req -sha256 -in client.csr -CA ca.crt -CAkey ca.key -CAcreateserial -out client.crt
openssl x509 -req -in client.csr -CA ca.crt -CAkey ca.key -CAcreateserial -out client.crt -days 3650 -sha256
openssl x509 -in client.crt -text -noout

openssl verify -verbose -CAfile ca.crt client.crt

echo 'export const localhostCertificate = `'
cat localhost.crt
echo '`'
echo

echo 'export const localhostKey = `'
cat localhost.key
echo '`'
echo

# Covert to TS format
echo 'export const clientCaCertificate = `'
cat ca.crt
echo '`'
echo

echo 'export const clientCertificate = `'
cat client.crt
echo '`'
echo

echo 'export const clientKey = `'
cat client.key
echo '`'

rm -f *.csr *.crt *.srl *.key