---
layout: '@layouts/ProseLayout.astro'
title: Tietoturvakäytännöt
description: Tässä kuvataan yleisellä tasolla Clouderin tietoturvakäytännöt ja toimenpiteet, jotka on toteutettu palvelun turvallisuuden varmistamiseksi.
---

<span class="page-meta">[In English](/information-security-practices)</span>

Tässä kuvataan yleisellä tasolla Clouderin tietoturvakäytännöt ja toimenpiteet, jotka on toteutettu palvelun turvallisuuden varmistamiseksi.

## Dashboard ja API

Kaikki käyttäjät autentikoidaan omaa organisaatiokirjautumistaan vasten kertakirjautumisen (SSO) avulla.

Käyttäjän organisaatio on hyväksynyt käyttäjän autentikoinnin Clouderin Dashboard-palveluun ja määrittelee itse tarvittavan autentikoinnin tason.

Käyttäjälle näkyy Clouderin palvelussa vain tiedot joihin käyttäjälle on myönnetty oikeudet. Oletuksena käyttäjällä ei ole pääsyä mihinkään tietoon, mitä ei ole erikseen sallittu.

Kaikki yhteydet dashboardiin ovat TLS-salattuja.

Palvelu ottaa tietokannoista automaattisesti varmuuskopiot päivittäin. Data sijaitsee fyysisesti EU:n alueella.

## Ohjelmistokehityksen tietoturvakäytännöt

Ohjelmistokehityksessä seurataan OWASP:n suosituksia ja parhaita käytäntöjä. Riippuvuuksia seurataan automaattisesti tietoturva-aukkojen ja vanhentuneiden versioiden varalta.

Kaikki lähdekoodi on Clouderin versionhallinnassa ja julkaisuvaiheessa se sijoitetaan kontteihin, joista on muodostettu SBOM (Software Bill of Materials) ja jotka ovat versioituja ja sijoitettu Clouderin omaan yksityiseen container registryyn. Päivitys eri ympäristöihin tapahtuu ohjelmallisesti IaC (Infrastructure as Code) -menetelmillä.

Versionhallinnasta otetaan automaattisesti säännölliset off site-varmuuskopiot.

## Kiinteistössä olevien laitteiden päivitykset ja etähallinta

Kiinteistössä olevat VCE-laitteet päivitetään säännöllisesti hallinnoidun etäyhteyden kautta. Hallinnoidut etäyhteydet hoidetaan Tailscale-verkon kautta, joka autentikoi käyttäjät ja laitteet Clouderin määrittelemien sääntöjen mukaisesti. Suoria salasanalla autentikoituvia yhteyksiä ei käytetä eikä sallita ulkoapäin.

Datan siirto pilveen tapahtuu TLS-salatun yhteyden yli ja autentikoidaan pilvipalvelussa api-avaimella jolla on vain lisäys-oikeus.

Käyttäjät autentikoidaan organisaatioon ja vaadittuun ryhmään kuuluvaksi (RBAC) jatkuvasti. Kun käyttäjä poistetaan organisaatiosta tai ryhmästä, hän menettää automaattisesti oikeudet etäyhteyksien muodostamiseen.

Laitteisiin generoidaan vahva salasana ohjelmallisesti. Salasana tallennetaan organisaation salasanaholviin ja käytetään sieltä vain ohjelmallisesti rooliin rajoitetusti.

Mikäli kiinteistössä on EC-laitteiden välisiä RF-verkkoja käytössä, verkkojen salausavain on verkkokohtainen.
