<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    version="2.0">
    
    <xsl:output method="xhtml" indent="yes" encoding="UTF-8"/>
        <xsl:template match='doc'>
        <html>
            <head>
                <title>Arquivo Sonoro: Página Individual</title>
                <meta charset="UTF-8"/>
            </head>
            <body>
                <h1 class="w3-xxxlarge"><xsl:value-of select="tit"/></h1>
                <table>
                    <tr>
                        <th>Província:</th><td><xsl:value-of select="prov"/></td>
                    </tr>
                    <tr>
                        <th>Local:</th><td><xsl:value-of select="local"/></td>
                    </tr>
                    <tr>
                        <th>Músico:</th><td><xsl:value-of select="musico"/></td>
                    </tr>
                    <tr>
                        <th>Duração:</th><td><xsl:value-of select="duracao"/></td>
                    </tr>
                </table> 
                <hr width="40%"/>
            </body>
        </html>
        </xsl:template>
</xsl:stylesheet>