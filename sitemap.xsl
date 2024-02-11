<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
    <html>
        <head>
            <title>Sitemap</title>
            <style>
                table {
                    border-collapse: collapse;
                    width: 100%;
                }
                th, td {
                    border: 1px solid #ddd;
                    padding: 8px;
                    text-align: left;
                }
                th {
                    background-color: #f2f2f2;
                }
                tr:nth-child(even) {
                    background-color: #f2f2f2;
                }
                tr:hover {
                    background-color: #ddd;
                }
                a {
                    color: blue;
                    text-decoration: none;
                }
                a:hover {
                    text-decoration: underline;
                }
            </style>
        </head>
        <body>
            <h2>Sitemap</h2>
            <table>
                <tr>
                    <th>URL</th>
                    <th>Priority</th>
                </tr>
                <xsl:for-each select="//*[local-name()='urlset']/*[local-name()='url']">
                    <tr>
                        <td><a href="{*[local-name()='loc']}"><xsl:value-of select="*[local-name()='loc']"/></a></td>
                        <td><xsl:value-of select="*[local-name()='priority']"/></td>
                    </tr>
                </xsl:for-each>
            </table>
        </body>
    </html>
</xsl:template>

</xsl:stylesheet>
