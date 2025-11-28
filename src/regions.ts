/**
 * Complete database of Swedish regions for SCB MCP Server
 *
 * Contains:
 * - 1 country (Riket)
 * - 21 counties (län)
 * - 290 municipalities (kommuner)
 *
 * This enables fast, offline region lookups without API calls.
 * Supports fuzzy matching for Swedish characters (ä/a, ö/o, å/a).
 */

export interface Region {
  code: string;
  name: string;
  type: 'country' | 'county' | 'municipality';
  countyCode?: string; // For municipalities, which county they belong to
}

/**
 * All Swedish regions - complete list
 * Source: SCB regional codes as of 2024
 */
export const ALL_REGIONS: Region[] = [
  // === COUNTRY ===
  { code: '00', name: 'Riket', type: 'country' },

  // === COUNTIES (LÄN) ===
  { code: '01', name: 'Stockholms län', type: 'county' },
  { code: '03', name: 'Uppsala län', type: 'county' },
  { code: '04', name: 'Södermanlands län', type: 'county' },
  { code: '05', name: 'Östergötlands län', type: 'county' },
  { code: '06', name: 'Jönköpings län', type: 'county' },
  { code: '07', name: 'Kronobergs län', type: 'county' },
  { code: '08', name: 'Kalmar län', type: 'county' },
  { code: '09', name: 'Gotlands län', type: 'county' },
  { code: '10', name: 'Blekinge län', type: 'county' },
  { code: '12', name: 'Skåne län', type: 'county' },
  { code: '13', name: 'Hallands län', type: 'county' },
  { code: '14', name: 'Västra Götalands län', type: 'county' },
  { code: '17', name: 'Värmlands län', type: 'county' },
  { code: '18', name: 'Örebro län', type: 'county' },
  { code: '19', name: 'Västmanlands län', type: 'county' },
  { code: '20', name: 'Dalarnas län', type: 'county' },
  { code: '21', name: 'Gävleborgs län', type: 'county' },
  { code: '22', name: 'Västernorrlands län', type: 'county' },
  { code: '23', name: 'Jämtlands län', type: 'county' },
  { code: '24', name: 'Västerbottens län', type: 'county' },
  { code: '25', name: 'Norrbottens län', type: 'county' },

  // === MUNICIPALITIES (KOMMUNER) ===

  // Stockholms län (01)
  { code: '0114', name: 'Upplands Väsby', type: 'municipality', countyCode: '01' },
  { code: '0115', name: 'Vallentuna', type: 'municipality', countyCode: '01' },
  { code: '0117', name: 'Österåker', type: 'municipality', countyCode: '01' },
  { code: '0120', name: 'Värmdö', type: 'municipality', countyCode: '01' },
  { code: '0123', name: 'Järfälla', type: 'municipality', countyCode: '01' },
  { code: '0125', name: 'Ekerö', type: 'municipality', countyCode: '01' },
  { code: '0126', name: 'Huddinge', type: 'municipality', countyCode: '01' },
  { code: '0127', name: 'Botkyrka', type: 'municipality', countyCode: '01' },
  { code: '0128', name: 'Salem', type: 'municipality', countyCode: '01' },
  { code: '0136', name: 'Haninge', type: 'municipality', countyCode: '01' },
  { code: '0138', name: 'Tyresö', type: 'municipality', countyCode: '01' },
  { code: '0139', name: 'Upplands-Bro', type: 'municipality', countyCode: '01' },
  { code: '0140', name: 'Nykvarn', type: 'municipality', countyCode: '01' },
  { code: '0160', name: 'Täby', type: 'municipality', countyCode: '01' },
  { code: '0162', name: 'Danderyd', type: 'municipality', countyCode: '01' },
  { code: '0163', name: 'Sollentuna', type: 'municipality', countyCode: '01' },
  { code: '0180', name: 'Stockholm', type: 'municipality', countyCode: '01' },
  { code: '0181', name: 'Södertälje', type: 'municipality', countyCode: '01' },
  { code: '0182', name: 'Nacka', type: 'municipality', countyCode: '01' },
  { code: '0183', name: 'Sundbyberg', type: 'municipality', countyCode: '01' },
  { code: '0184', name: 'Solna', type: 'municipality', countyCode: '01' },
  { code: '0186', name: 'Lidingö', type: 'municipality', countyCode: '01' },
  { code: '0187', name: 'Vaxholm', type: 'municipality', countyCode: '01' },
  { code: '0188', name: 'Norrtälje', type: 'municipality', countyCode: '01' },
  { code: '0191', name: 'Sigtuna', type: 'municipality', countyCode: '01' },
  { code: '0192', name: 'Nynäshamn', type: 'municipality', countyCode: '01' },

  // Uppsala län (03)
  { code: '0305', name: 'Håbo', type: 'municipality', countyCode: '03' },
  { code: '0319', name: 'Älvkarleby', type: 'municipality', countyCode: '03' },
  { code: '0330', name: 'Knivsta', type: 'municipality', countyCode: '03' },
  { code: '0331', name: 'Heby', type: 'municipality', countyCode: '03' },
  { code: '0360', name: 'Tierp', type: 'municipality', countyCode: '03' },
  { code: '0380', name: 'Uppsala', type: 'municipality', countyCode: '03' },
  { code: '0381', name: 'Enköping', type: 'municipality', countyCode: '03' },
  { code: '0382', name: 'Östhammar', type: 'municipality', countyCode: '03' },

  // Södermanlands län (04)
  { code: '0428', name: 'Vingåker', type: 'municipality', countyCode: '04' },
  { code: '0461', name: 'Gnesta', type: 'municipality', countyCode: '04' },
  { code: '0480', name: 'Nyköping', type: 'municipality', countyCode: '04' },
  { code: '0481', name: 'Oxelösund', type: 'municipality', countyCode: '04' },
  { code: '0482', name: 'Flen', type: 'municipality', countyCode: '04' },
  { code: '0483', name: 'Katrineholm', type: 'municipality', countyCode: '04' },
  { code: '0484', name: 'Eskilstuna', type: 'municipality', countyCode: '04' },
  { code: '0486', name: 'Strängnäs', type: 'municipality', countyCode: '04' },
  { code: '0488', name: 'Trosa', type: 'municipality', countyCode: '04' },

  // Östergötlands län (05)
  { code: '0509', name: 'Ödeshög', type: 'municipality', countyCode: '05' },
  { code: '0512', name: 'Ydre', type: 'municipality', countyCode: '05' },
  { code: '0513', name: 'Kinda', type: 'municipality', countyCode: '05' },
  { code: '0560', name: 'Boxholm', type: 'municipality', countyCode: '05' },
  { code: '0561', name: 'Åtvidaberg', type: 'municipality', countyCode: '05' },
  { code: '0562', name: 'Finspång', type: 'municipality', countyCode: '05' },
  { code: '0563', name: 'Valdemarsvik', type: 'municipality', countyCode: '05' },
  { code: '0580', name: 'Linköping', type: 'municipality', countyCode: '05' },
  { code: '0581', name: 'Norrköping', type: 'municipality', countyCode: '05' },
  { code: '0582', name: 'Söderköping', type: 'municipality', countyCode: '05' },
  { code: '0583', name: 'Motala', type: 'municipality', countyCode: '05' },
  { code: '0584', name: 'Vadstena', type: 'municipality', countyCode: '05' },
  { code: '0586', name: 'Mjölby', type: 'municipality', countyCode: '05' },

  // Jönköpings län (06)
  { code: '0604', name: 'Aneby', type: 'municipality', countyCode: '06' },
  { code: '0617', name: 'Gnosjö', type: 'municipality', countyCode: '06' },
  { code: '0642', name: 'Mullsjö', type: 'municipality', countyCode: '06' },
  { code: '0643', name: 'Habo', type: 'municipality', countyCode: '06' },
  { code: '0662', name: 'Gislaved', type: 'municipality', countyCode: '06' },
  { code: '0665', name: 'Vaggeryd', type: 'municipality', countyCode: '06' },
  { code: '0680', name: 'Jönköping', type: 'municipality', countyCode: '06' },
  { code: '0682', name: 'Nässjö', type: 'municipality', countyCode: '06' },
  { code: '0683', name: 'Värnamo', type: 'municipality', countyCode: '06' },
  { code: '0684', name: 'Sävsjö', type: 'municipality', countyCode: '06' },
  { code: '0685', name: 'Vetlanda', type: 'municipality', countyCode: '06' },
  { code: '0686', name: 'Eksjö', type: 'municipality', countyCode: '06' },
  { code: '0687', name: 'Tranås', type: 'municipality', countyCode: '06' },

  // Kronobergs län (07)
  { code: '0760', name: 'Uppvidinge', type: 'municipality', countyCode: '07' },
  { code: '0761', name: 'Lessebo', type: 'municipality', countyCode: '07' },
  { code: '0763', name: 'Tingsryd', type: 'municipality', countyCode: '07' },
  { code: '0764', name: 'Alvesta', type: 'municipality', countyCode: '07' },
  { code: '0765', name: 'Älmhult', type: 'municipality', countyCode: '07' },
  { code: '0767', name: 'Markaryd', type: 'municipality', countyCode: '07' },
  { code: '0780', name: 'Växjö', type: 'municipality', countyCode: '07' },
  { code: '0781', name: 'Ljungby', type: 'municipality', countyCode: '07' },

  // Kalmar län (08)
  { code: '0821', name: 'Högsby', type: 'municipality', countyCode: '08' },
  { code: '0834', name: 'Torsås', type: 'municipality', countyCode: '08' },
  { code: '0840', name: 'Mörbylånga', type: 'municipality', countyCode: '08' },
  { code: '0860', name: 'Hultsfred', type: 'municipality', countyCode: '08' },
  { code: '0861', name: 'Mönsterås', type: 'municipality', countyCode: '08' },
  { code: '0862', name: 'Emmaboda', type: 'municipality', countyCode: '08' },
  { code: '0880', name: 'Kalmar', type: 'municipality', countyCode: '08' },
  { code: '0881', name: 'Nybro', type: 'municipality', countyCode: '08' },
  { code: '0882', name: 'Oskarshamn', type: 'municipality', countyCode: '08' },
  { code: '0883', name: 'Västervik', type: 'municipality', countyCode: '08' },
  { code: '0884', name: 'Vimmerby', type: 'municipality', countyCode: '08' },
  { code: '0885', name: 'Borgholm', type: 'municipality', countyCode: '08' },

  // Gotlands län (09)
  { code: '0980', name: 'Gotland', type: 'municipality', countyCode: '09' },

  // Blekinge län (10)
  { code: '1060', name: 'Olofström', type: 'municipality', countyCode: '10' },
  { code: '1080', name: 'Karlskrona', type: 'municipality', countyCode: '10' },
  { code: '1081', name: 'Ronneby', type: 'municipality', countyCode: '10' },
  { code: '1082', name: 'Karlshamn', type: 'municipality', countyCode: '10' },
  { code: '1083', name: 'Sölvesborg', type: 'municipality', countyCode: '10' },

  // Skåne län (12)
  { code: '1214', name: 'Svalöv', type: 'municipality', countyCode: '12' },
  { code: '1230', name: 'Staffanstorp', type: 'municipality', countyCode: '12' },
  { code: '1231', name: 'Burlöv', type: 'municipality', countyCode: '12' },
  { code: '1233', name: 'Vellinge', type: 'municipality', countyCode: '12' },
  { code: '1256', name: 'Östra Göinge', type: 'municipality', countyCode: '12' },
  { code: '1257', name: 'Örkelljunga', type: 'municipality', countyCode: '12' },
  { code: '1260', name: 'Bjuv', type: 'municipality', countyCode: '12' },
  { code: '1261', name: 'Kävlinge', type: 'municipality', countyCode: '12' },
  { code: '1262', name: 'Lomma', type: 'municipality', countyCode: '12' },
  { code: '1263', name: 'Svedala', type: 'municipality', countyCode: '12' },
  { code: '1264', name: 'Skurup', type: 'municipality', countyCode: '12' },
  { code: '1265', name: 'Sjöbo', type: 'municipality', countyCode: '12' },
  { code: '1266', name: 'Hörby', type: 'municipality', countyCode: '12' },
  { code: '1267', name: 'Höör', type: 'municipality', countyCode: '12' },
  { code: '1270', name: 'Tomelilla', type: 'municipality', countyCode: '12' },
  { code: '1272', name: 'Bromölla', type: 'municipality', countyCode: '12' },
  { code: '1273', name: 'Osby', type: 'municipality', countyCode: '12' },
  { code: '1275', name: 'Perstorp', type: 'municipality', countyCode: '12' },
  { code: '1276', name: 'Klippan', type: 'municipality', countyCode: '12' },
  { code: '1277', name: 'Åstorp', type: 'municipality', countyCode: '12' },
  { code: '1278', name: 'Båstad', type: 'municipality', countyCode: '12' },
  { code: '1280', name: 'Malmö', type: 'municipality', countyCode: '12' },
  { code: '1281', name: 'Lund', type: 'municipality', countyCode: '12' },
  { code: '1282', name: 'Landskrona', type: 'municipality', countyCode: '12' },
  { code: '1283', name: 'Helsingborg', type: 'municipality', countyCode: '12' },
  { code: '1284', name: 'Höganäs', type: 'municipality', countyCode: '12' },
  { code: '1285', name: 'Eslöv', type: 'municipality', countyCode: '12' },
  { code: '1286', name: 'Ystad', type: 'municipality', countyCode: '12' },
  { code: '1287', name: 'Trelleborg', type: 'municipality', countyCode: '12' },
  { code: '1290', name: 'Kristianstad', type: 'municipality', countyCode: '12' },
  { code: '1291', name: 'Simrishamn', type: 'municipality', countyCode: '12' },
  { code: '1292', name: 'Ängelholm', type: 'municipality', countyCode: '12' },
  { code: '1293', name: 'Hässleholm', type: 'municipality', countyCode: '12' },

  // Hallands län (13)
  { code: '1315', name: 'Hylte', type: 'municipality', countyCode: '13' },
  { code: '1380', name: 'Halmstad', type: 'municipality', countyCode: '13' },
  { code: '1381', name: 'Laholm', type: 'municipality', countyCode: '13' },
  { code: '1382', name: 'Falkenberg', type: 'municipality', countyCode: '13' },
  { code: '1383', name: 'Varberg', type: 'municipality', countyCode: '13' },
  { code: '1384', name: 'Kungsbacka', type: 'municipality', countyCode: '13' },

  // Västra Götalands län (14)
  { code: '1401', name: 'Härryda', type: 'municipality', countyCode: '14' },
  { code: '1402', name: 'Partille', type: 'municipality', countyCode: '14' },
  { code: '1407', name: 'Öckerö', type: 'municipality', countyCode: '14' },
  { code: '1415', name: 'Stenungsund', type: 'municipality', countyCode: '14' },
  { code: '1419', name: 'Tjörn', type: 'municipality', countyCode: '14' },
  { code: '1421', name: 'Orust', type: 'municipality', countyCode: '14' },
  { code: '1427', name: 'Sotenäs', type: 'municipality', countyCode: '14' },
  { code: '1430', name: 'Munkedal', type: 'municipality', countyCode: '14' },
  { code: '1435', name: 'Tanum', type: 'municipality', countyCode: '14' },
  { code: '1438', name: 'Dals-Ed', type: 'municipality', countyCode: '14' },
  { code: '1439', name: 'Färgelanda', type: 'municipality', countyCode: '14' },
  { code: '1440', name: 'Ale', type: 'municipality', countyCode: '14' },
  { code: '1441', name: 'Lerum', type: 'municipality', countyCode: '14' },
  { code: '1442', name: 'Vårgårda', type: 'municipality', countyCode: '14' },
  { code: '1443', name: 'Bollebygd', type: 'municipality', countyCode: '14' },
  { code: '1444', name: 'Grästorp', type: 'municipality', countyCode: '14' },
  { code: '1445', name: 'Essunga', type: 'municipality', countyCode: '14' },
  { code: '1446', name: 'Karlsborg', type: 'municipality', countyCode: '14' },
  { code: '1447', name: 'Gullspång', type: 'municipality', countyCode: '14' },
  { code: '1452', name: 'Tranemo', type: 'municipality', countyCode: '14' },
  { code: '1460', name: 'Bengtsfors', type: 'municipality', countyCode: '14' },
  { code: '1461', name: 'Mellerud', type: 'municipality', countyCode: '14' },
  { code: '1462', name: 'Lilla Edet', type: 'municipality', countyCode: '14' },
  { code: '1463', name: 'Mark', type: 'municipality', countyCode: '14' },
  { code: '1465', name: 'Svenljunga', type: 'municipality', countyCode: '14' },
  { code: '1466', name: 'Herrljunga', type: 'municipality', countyCode: '14' },
  { code: '1470', name: 'Vara', type: 'municipality', countyCode: '14' },
  { code: '1471', name: 'Götene', type: 'municipality', countyCode: '14' },
  { code: '1472', name: 'Tibro', type: 'municipality', countyCode: '14' },
  { code: '1473', name: 'Töreboda', type: 'municipality', countyCode: '14' },
  { code: '1480', name: 'Göteborg', type: 'municipality', countyCode: '14' },
  { code: '1481', name: 'Mölndal', type: 'municipality', countyCode: '14' },
  { code: '1482', name: 'Kungälv', type: 'municipality', countyCode: '14' },
  { code: '1484', name: 'Lysekil', type: 'municipality', countyCode: '14' },
  { code: '1485', name: 'Uddevalla', type: 'municipality', countyCode: '14' },
  { code: '1486', name: 'Strömstad', type: 'municipality', countyCode: '14' },
  { code: '1487', name: 'Vänersborg', type: 'municipality', countyCode: '14' },
  { code: '1488', name: 'Trollhättan', type: 'municipality', countyCode: '14' },
  { code: '1489', name: 'Alingsås', type: 'municipality', countyCode: '14' },
  { code: '1490', name: 'Borås', type: 'municipality', countyCode: '14' },
  { code: '1491', name: 'Ulricehamn', type: 'municipality', countyCode: '14' },
  { code: '1492', name: 'Åmål', type: 'municipality', countyCode: '14' },
  { code: '1493', name: 'Mariestad', type: 'municipality', countyCode: '14' },
  { code: '1494', name: 'Lidköping', type: 'municipality', countyCode: '14' },
  { code: '1495', name: 'Skara', type: 'municipality', countyCode: '14' },
  { code: '1496', name: 'Skövde', type: 'municipality', countyCode: '14' },
  { code: '1497', name: 'Hjo', type: 'municipality', countyCode: '14' },
  { code: '1498', name: 'Tidaholm', type: 'municipality', countyCode: '14' },
  { code: '1499', name: 'Falköping', type: 'municipality', countyCode: '14' },

  // Värmlands län (17)
  { code: '1715', name: 'Kil', type: 'municipality', countyCode: '17' },
  { code: '1730', name: 'Eda', type: 'municipality', countyCode: '17' },
  { code: '1737', name: 'Torsby', type: 'municipality', countyCode: '17' },
  { code: '1760', name: 'Storfors', type: 'municipality', countyCode: '17' },
  { code: '1761', name: 'Hammarö', type: 'municipality', countyCode: '17' },
  { code: '1762', name: 'Munkfors', type: 'municipality', countyCode: '17' },
  { code: '1763', name: 'Forshaga', type: 'municipality', countyCode: '17' },
  { code: '1764', name: 'Grums', type: 'municipality', countyCode: '17' },
  { code: '1765', name: 'Årjäng', type: 'municipality', countyCode: '17' },
  { code: '1766', name: 'Sunne', type: 'municipality', countyCode: '17' },
  { code: '1780', name: 'Karlstad', type: 'municipality', countyCode: '17' },
  { code: '1781', name: 'Kristinehamn', type: 'municipality', countyCode: '17' },
  { code: '1782', name: 'Filipstad', type: 'municipality', countyCode: '17' },
  { code: '1783', name: 'Hagfors', type: 'municipality', countyCode: '17' },
  { code: '1784', name: 'Arvika', type: 'municipality', countyCode: '17' },
  { code: '1785', name: 'Säffle', type: 'municipality', countyCode: '17' },

  // Örebro län (18)
  { code: '1814', name: 'Lekeberg', type: 'municipality', countyCode: '18' },
  { code: '1860', name: 'Laxå', type: 'municipality', countyCode: '18' },
  { code: '1861', name: 'Hallsberg', type: 'municipality', countyCode: '18' },
  { code: '1862', name: 'Degerfors', type: 'municipality', countyCode: '18' },
  { code: '1863', name: 'Hällefors', type: 'municipality', countyCode: '18' },
  { code: '1864', name: 'Ljusnarsberg', type: 'municipality', countyCode: '18' },
  { code: '1880', name: 'Örebro', type: 'municipality', countyCode: '18' },
  { code: '1881', name: 'Kumla', type: 'municipality', countyCode: '18' },
  { code: '1882', name: 'Askersund', type: 'municipality', countyCode: '18' },
  { code: '1883', name: 'Karlskoga', type: 'municipality', countyCode: '18' },
  { code: '1884', name: 'Nora', type: 'municipality', countyCode: '18' },
  { code: '1885', name: 'Lindesberg', type: 'municipality', countyCode: '18' },

  // Västmanlands län (19)
  { code: '1904', name: 'Skinnskatteberg', type: 'municipality', countyCode: '19' },
  { code: '1907', name: 'Surahammar', type: 'municipality', countyCode: '19' },
  { code: '1960', name: 'Kungsör', type: 'municipality', countyCode: '19' },
  { code: '1961', name: 'Hallstahammar', type: 'municipality', countyCode: '19' },
  { code: '1962', name: 'Norberg', type: 'municipality', countyCode: '19' },
  { code: '1980', name: 'Västerås', type: 'municipality', countyCode: '19' },
  { code: '1981', name: 'Sala', type: 'municipality', countyCode: '19' },
  { code: '1982', name: 'Fagersta', type: 'municipality', countyCode: '19' },
  { code: '1983', name: 'Köping', type: 'municipality', countyCode: '19' },
  { code: '1984', name: 'Arboga', type: 'municipality', countyCode: '19' },

  // Dalarnas län (20)
  { code: '2021', name: 'Vansbro', type: 'municipality', countyCode: '20' },
  { code: '2023', name: 'Malung-Sälen', type: 'municipality', countyCode: '20' },
  { code: '2026', name: 'Gagnef', type: 'municipality', countyCode: '20' },
  { code: '2029', name: 'Leksand', type: 'municipality', countyCode: '20' },
  { code: '2031', name: 'Rättvik', type: 'municipality', countyCode: '20' },
  { code: '2034', name: 'Orsa', type: 'municipality', countyCode: '20' },
  { code: '2039', name: 'Älvdalen', type: 'municipality', countyCode: '20' },
  { code: '2061', name: 'Smedjebacken', type: 'municipality', countyCode: '20' },
  { code: '2062', name: 'Mora', type: 'municipality', countyCode: '20' },
  { code: '2080', name: 'Falun', type: 'municipality', countyCode: '20' },
  { code: '2081', name: 'Borlänge', type: 'municipality', countyCode: '20' },
  { code: '2082', name: 'Säter', type: 'municipality', countyCode: '20' },
  { code: '2083', name: 'Hedemora', type: 'municipality', countyCode: '20' },
  { code: '2084', name: 'Avesta', type: 'municipality', countyCode: '20' },
  { code: '2085', name: 'Ludvika', type: 'municipality', countyCode: '20' },

  // Gävleborgs län (21)
  { code: '2101', name: 'Ockelbo', type: 'municipality', countyCode: '21' },
  { code: '2104', name: 'Hofors', type: 'municipality', countyCode: '21' },
  { code: '2121', name: 'Ovanåker', type: 'municipality', countyCode: '21' },
  { code: '2132', name: 'Nordanstig', type: 'municipality', countyCode: '21' },
  { code: '2161', name: 'Ljusdal', type: 'municipality', countyCode: '21' },
  { code: '2180', name: 'Gävle', type: 'municipality', countyCode: '21' },
  { code: '2181', name: 'Sandviken', type: 'municipality', countyCode: '21' },
  { code: '2182', name: 'Söderhamn', type: 'municipality', countyCode: '21' },
  { code: '2183', name: 'Bollnäs', type: 'municipality', countyCode: '21' },
  { code: '2184', name: 'Hudiksvall', type: 'municipality', countyCode: '21' },

  // Västernorrlands län (22)
  { code: '2260', name: 'Ånge', type: 'municipality', countyCode: '22' },
  { code: '2262', name: 'Timrå', type: 'municipality', countyCode: '22' },
  { code: '2280', name: 'Härnösand', type: 'municipality', countyCode: '22' },
  { code: '2281', name: 'Sundsvall', type: 'municipality', countyCode: '22' },
  { code: '2282', name: 'Kramfors', type: 'municipality', countyCode: '22' },
  { code: '2283', name: 'Sollefteå', type: 'municipality', countyCode: '22' },
  { code: '2284', name: 'Örnsköldsvik', type: 'municipality', countyCode: '22' },

  // Jämtlands län (23)
  { code: '2303', name: 'Ragunda', type: 'municipality', countyCode: '23' },
  { code: '2305', name: 'Bräcke', type: 'municipality', countyCode: '23' },
  { code: '2309', name: 'Krokom', type: 'municipality', countyCode: '23' },
  { code: '2313', name: 'Strömsund', type: 'municipality', countyCode: '23' },
  { code: '2321', name: 'Åre', type: 'municipality', countyCode: '23' },
  { code: '2326', name: 'Berg', type: 'municipality', countyCode: '23' },
  { code: '2361', name: 'Härjedalen', type: 'municipality', countyCode: '23' },
  { code: '2380', name: 'Östersund', type: 'municipality', countyCode: '23' },

  // Västerbottens län (24)
  { code: '2401', name: 'Nordmaling', type: 'municipality', countyCode: '24' },
  { code: '2403', name: 'Bjurholm', type: 'municipality', countyCode: '24' },
  { code: '2404', name: 'Vindeln', type: 'municipality', countyCode: '24' },
  { code: '2409', name: 'Robertsfors', type: 'municipality', countyCode: '24' },
  { code: '2417', name: 'Norsjö', type: 'municipality', countyCode: '24' },
  { code: '2418', name: 'Malå', type: 'municipality', countyCode: '24' },
  { code: '2421', name: 'Storuman', type: 'municipality', countyCode: '24' },
  { code: '2422', name: 'Sorsele', type: 'municipality', countyCode: '24' },
  { code: '2425', name: 'Dorotea', type: 'municipality', countyCode: '24' },
  { code: '2460', name: 'Vännäs', type: 'municipality', countyCode: '24' },
  { code: '2462', name: 'Vilhelmina', type: 'municipality', countyCode: '24' },
  { code: '2463', name: 'Åsele', type: 'municipality', countyCode: '24' },
  { code: '2480', name: 'Umeå', type: 'municipality', countyCode: '24' },
  { code: '2481', name: 'Lycksele', type: 'municipality', countyCode: '24' },
  { code: '2482', name: 'Skellefteå', type: 'municipality', countyCode: '24' },

  // Norrbottens län (25)
  { code: '2505', name: 'Arvidsjaur', type: 'municipality', countyCode: '25' },
  { code: '2506', name: 'Arjeplog', type: 'municipality', countyCode: '25' },
  { code: '2510', name: 'Jokkmokk', type: 'municipality', countyCode: '25' },
  { code: '2513', name: 'Överkalix', type: 'municipality', countyCode: '25' },
  { code: '2514', name: 'Kalix', type: 'municipality', countyCode: '25' },
  { code: '2518', name: 'Övertorneå', type: 'municipality', countyCode: '25' },
  { code: '2521', name: 'Pajala', type: 'municipality', countyCode: '25' },
  { code: '2523', name: 'Gällivare', type: 'municipality', countyCode: '25' },
  { code: '2560', name: 'Älvsbyn', type: 'municipality', countyCode: '25' },
  { code: '2580', name: 'Luleå', type: 'municipality', countyCode: '25' },
  { code: '2581', name: 'Piteå', type: 'municipality', countyCode: '25' },
  { code: '2582', name: 'Boden', type: 'municipality', countyCode: '25' },
  { code: '2583', name: 'Haparanda', type: 'municipality', countyCode: '25' },
  { code: '2584', name: 'Kiruna', type: 'municipality', countyCode: '25' },
];

/**
 * Quick lookup maps for fast access
 */
export const REGIONS_BY_CODE = new Map<string, Region>(
  ALL_REGIONS.map(r => [r.code, r])
);

export const REGIONS_BY_NAME = new Map<string, Region>(
  ALL_REGIONS.map(r => [r.name.toLowerCase(), r])
);

/**
 * Get all counties
 */
export const COUNTIES = ALL_REGIONS.filter(r => r.type === 'county');

/**
 * Get all municipalities
 */
export const MUNICIPALITIES = ALL_REGIONS.filter(r => r.type === 'municipality');

/**
 * Get municipalities in a specific county
 */
export function getMunicipalitiesInCounty(countyCode: string): Region[] {
  return MUNICIPALITIES.filter(m => m.countyCode === countyCode);
}

/**
 * Normalize string for fuzzy matching
 * Handles Swedish characters: ä→a, ö→o, å→a, é→e
 */
export function normalizeForSearch(str: string): string {
  return str
    .toLowerCase()
    .replace(/ä/g, 'a')
    .replace(/å/g, 'a')
    .replace(/ö/g, 'o')
    .replace(/é/g, 'e')
    .replace(/ü/g, 'u')
    .replace(/[^a-z0-9]/g, '');
}

/**
 * Search regions with fuzzy matching
 * Supports searching without Swedish characters (e.g., "Goteborg" matches "Göteborg")
 */
export function searchRegions(query: string): Region[] {
  const normalizedQuery = normalizeForSearch(query);

  // First try exact code match
  const codeMatch = REGIONS_BY_CODE.get(query);
  if (codeMatch) {
    return [codeMatch];
  }

  // Then try exact name match (case-insensitive)
  const nameMatch = REGIONS_BY_NAME.get(query.toLowerCase());
  if (nameMatch) {
    return [nameMatch];
  }

  // Finally, fuzzy search
  return ALL_REGIONS.filter(region => {
    const normalizedName = normalizeForSearch(region.name);
    return normalizedName.includes(normalizedQuery) ||
           normalizedQuery.includes(normalizedName) ||
           region.code.includes(query);
  });
}

/**
 * Find a single region by query (returns best match)
 */
export function findRegion(query: string): Region | null {
  const matches = searchRegions(query);
  if (matches.length === 0) return null;

  // Prefer exact matches
  const normalizedQuery = normalizeForSearch(query);
  const exactMatch = matches.find(r =>
    normalizeForSearch(r.name) === normalizedQuery || r.code === query
  );

  return exactMatch || matches[0];
}

/**
 * Statistics about the region database
 */
export const REGION_STATS = {
  total: ALL_REGIONS.length,
  countries: ALL_REGIONS.filter(r => r.type === 'country').length,
  counties: COUNTIES.length,
  municipalities: MUNICIPALITIES.length,
};
