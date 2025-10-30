---
layout: '@layouts/ProseLayout.astro'
title: Information security practices
description: This document provides a general overview of Clouder’s information security practices and measures implemented to ensure the security of the service.
---

<span class="page-meta">[Suomeksi](/tietoturvakaytannot)</span>

This document provides a general overview of Clouder’s information security practices and measures implemented to ensure the security of the service.

## Dashboard and API

All users are authenticated against their own organization’s login using Single Sign-On (SSO).

The user’s organization has approved the user’s authentication to the Clouder Dashboard service and independently defines the required level of authentication.

Within the Clouder service, users only see information to which they have been granted access rights. By default, users do not have access to any information unless it has been specifically permitted.

All connections to the dashboard are TLS-encrypted.

The service automatically takes daily backups of databases. The data is physically located within the EU.

## Software development security practices

In software development, OWASP recommendations and best practices are followed. Dependencies are automatically monitored for security vulnerabilities and outdated versions.

All source code is under Clouder’s version control, and at the release stage, it is placed into containers for which an SBOM (Software Bill of Materials) is generated. These containers are versioned and stored in Clouder’s own private container registry. Updates to different environments are performed programmatically using IaC (Infrastructure as Code) methods.

Regular off-site backups are automatically taken from version control.

## Updates and remote management of on-premise devices

On-premise VCE devices are updated regularly via a managed remote connection. Managed remote connections are handled through the Tailscale network, which authenticates users and devices according to rules defined by Clouder. Direct password-authenticated connections are not used or allowed from outside.

Data transfer to the cloud takes place over a TLS-encrypted connection and is authenticated in the cloud service with an API key that only has write access.

Users are continuously authenticated as belonging to the organization and the required group (RBAC). When a user is removed from the organization or group, they automatically lose the right to establish remote connections.

A strong password is programmatically generated for the devices. The password is stored in the organization’s password vault and is only used programmatically with restricted role access.

If there are RF networks between EC devices on the premises, the network encryption key is specific to each network.
