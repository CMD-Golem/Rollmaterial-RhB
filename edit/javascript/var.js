var store_dienstwagen = `
			<div class="group">
				<h3>Allgemein</h3>
				<table>
					<div class="list" style="display: none;"></div>
					<tr>
						<td class="table_6">Baujahr</td>
						<td class="table_r">2010 - 2011 / Umbau 1990</td>
					</tr>
					<tr>
						<td class="table_6">Einsatz</td>
						<td class="table_r">StN, ChA, BB</td>
					</tr>
					<tr>
						<td class="table_6 only_here">Ausrangiert</td><!--Nur wenn vorhanden-->
						<td class="table_r">2356, 2359 - 2365</td>
					</tr>
					<tr>
						<td class="table_6 only_here">Noch vorhanden</td><!--Nur wenn vorhanden-->
						<td class="table_r">2356, 2359 - 2365</td>
					</tr>
					<tr>
						<td class="table_6 only_here">Depot</td><!--Nur wenn vorhanden-->
						<td class="table_r">Landquart</td>
					</tr>
				</table>
			</div>

			<div class="group">
				<h3>Technische Daten</h3>
				<table>
					<div class="list" style="display: none;"></div>
					<tr>
						<td class="table_6">Geschwindigkeit max.</td>
						<td class="table_r">100 km/h <small>(Reihe R)</small></td>
					</tr>
					<tr>
						<td class="table_6">Länge</td>
						<td class="table_r">49.50 m</td>
					</tr>
					<tr>
						<td class="table_6">Gewicht <small>(Tara)</small></td>
						<td class="table_r">15'300 kg</td>
					</tr>
					<tr>
						<td class="table_6">Raster Ladegewicht</td>
						<td class="table_r">
							<table class="ladegewicht_table">
								<tr>
									<td class="ladegewicht_top">80R</td>
									<td class="ladegewicht_top">80A</td>
									<td class="ladegewicht_top">60D</td>
								</tr>
								<tr>
									<td class="ladegewicht_bottom">12 t</td>
									<td class="ladegewicht_bottom">23 t</td>
									<td class="ladegewicht_bottom">30 t</td>
								</tr>
							</table>
						</td>
					</tr>
					<tr>
						<td class="table_6">Bremsgewicht</td>
						<td class="table_r">L13 <small class="underlined">U16</small> B18 <small class="underlined">U24</small> B24</td>
					</tr>
					<tr>
						<td class="table_6">Feststellbremse</td>
						<td class="table_r">H 17 / 44 kN <small>(H 60 t)</small></td>
					</tr>
				</table>
			</div>

			<div class="group">
				<h3>Fahrzeugausrüstung</h3>
				<table>
					<div class="list" style="display: none;"></div>
					<tr>
						<td class="table_6 only_here">Zug- / Stossvorrichtung</td><!--Nur wenn vorhanden-->
						<td class="table_r">Automatische Kupplung <small>(Schwab)</small> / Stangenpuffer</td>
					</tr>
					<tr>
						<td class="table_6">Heizleitung</td>
						<td class="table_r">StN und BB</td>
					</tr>
					<tr>
						<td class="table_6">Speiseluft-Leitung</td>
						<td class="table_r">ja</td>
					</tr>
					<tr>
						<td class="table_6">Bremsleitungen</td>
						<td class="table_r">Vakuum-Hauptleitung<br>Druckluft-Hauptleitung <small>(Dual-Bremse)</small></td>
					</tr>
					<tr>
						<td class="table_6">Bremssystem</td>
						<td class="table_r">Vakuum-Hauptleitung<br>Druckluft-Hauptleitung <small>(Dual-Bremse)</small></td>
					</tr>
					<tr>
						<td class="table_6 only_here">Bremszahnrad</td><!--Nur wenn vorhanden-->
						<td class="table_r">ja</td>
					</tr>
					<tr>
						<td class="table_6">LBT-Leitung</td>
						<td class="table_r">keine</td>
					</tr>
				</table>
			</div>

			<div class="group">
				<h3>Fahrzeugaufbau</h3>
				<table>
					<div class="list" style="display: none;"></div>
					<tr>
						<td class="table_6 only_here">Ladefläche</td><!--Nur wenn vorhanden-->
						<td class="table_r">5.9 m<sup>2</sup></td>
					</tr>
					<tr>
						<td class="table_6 only_here">Plattformlänge</td><!--Nur wenn vorhanden-->
						<td class="table_r">4.95 m</td>
					</tr>
					<tr>
						<td class="table_6 only_here">Tankinhalt</td><!--Nur wenn vorhanden-->
						<td class="table_r">42'000 Liter</td>
					</tr>
					<tr>
						<td class="table_6 only_here">Ladevolumen</td><!--Nur wenn vorhanden-->
						<td class="table_r">34.0 m<sup>3</sup></td>
					</tr>

					<!-- Rungen, Seitenwände, Bühnengeländer, Spanngurte, Containeraufnahme, Gleitbahn Rollcontainer -->
					<tr>
						<td class="table_6 only_here">Rungen</td><!--Gruppe 1-->
						<td class="table_r">drehbar / fest, verschraubt</td>
					</tr>
					<tr>
						<td class="table_6 only_here">Seitenwände</td><!--Gruppe 1-->
						<td class="table_r">abklappbar</td>
					</tr>
					<tr>
						<td class="table_6 only_here">Bühnengeländer</td><!--Gruppe 1-->
						<td class="table_r">steckbar</td>
					</tr>
					<tr>
						<td class="table_6 only_here">Spanngurte</td><!--Gruppe 1-->
						<td class="table_r">ja</td>
					</tr>
					<tr>
						<td class="table_6 only_here">Containeraufnahme</td><!--Gruppe 1-->
						<td class="table_r">keine</td>
					</tr>
					<tr>
						<td class="table_6 only_here">Gleitbahn Rollcontainer</td><!--Gruppe 1-->
						<td class="table_r">keine</td>
					</tr>

					<!-- Aufbau -->
					<tr>
						<td class="table_6 only_here">Aufbau</td><!--Gruppe 2-->
						<td class="table_r">Weichentraggerüst</td>
					</tr>

					<!-- Beladung -->
					<tr>
						<td class="table_6 only_here">Giraffe</td><!--Gruppe 3-->
						<td class="table_r"></td>
					</tr>

					<!-- Stirnseite 1, Stirnseite 2 -->
					<tr>
						<td class="table_6 only_here">Stirnseite 1 <small>(Handbremse)</small></td><!--Gruppe 4-->
						<td class="table_r">automatische Kupplung</td>
					</tr>
					<tr>
						<td class="table_6 only_here">Stirnseite 2</td><!--Gruppe 4-->
						<td class="table_r">Behelfsführerstand</td>
					</tr>

					<tr>
						<td class="table_6 only_here">Einschränkung</td><!--Nur wenn vorhanden-->
						<td class="table_r">Fahrzeug mit Lademassüberschreitung</td>
					</tr>
					<tr>
						<td class="table_6 only_here">Spezielles</td>
						<td class="table_r">Darf ohne Container nur ungebremst verkehren</td>
					</tr>
				</table>
			</div>

			<div class="group"><!--Nur wenn vorhanden-->
				<h3 class="only_here">Gewichte mit aufgesetztem Aufbau</h3>
				<table>
					<div class="list" style="display: none;"></div>
					<tr>
						<td class="table_6">Gewicht <small>(Tara)</small></td>
						<td class="table_r">26'590 kg</td>
					</tr>
					<tr>
						<td class="table_6">Raster Ladegewicht</td>
						<td class="table_r">
							<table class="ladegewicht_table">
								<tr>
									<td class="ladegewicht_top">80R</td>
									<td class="ladegewicht_top">80A</td>
									<td class="ladegewicht_top">60D</td>
								</tr>
								<tr>
									<td class="ladegewicht_bottom">12 t</td>
									<td class="ladegewicht_bottom">23 t</td>
									<td class="ladegewicht_bottom">30 t</td>
								</tr>
							</table>
						</td>
					</tr>
					<tr>
						<td class="table_6">Bremsgewicht</td>
						<td class="table_r">L13 <small class="underlined">U16</small> B18 <small class="underlined">U24</small> B24</td>
					</tr>
					<tr>
						<td class="table_6">Feststellbremse</td>
						<td class="table_r">H 17 / 44 kN</td>
					</tr>
				</table>
			</div>
`

// #################################################################################################
var store_gepaeckwagen = `
			<div class="group">
				<h3>Allgemein</h3>
				<div class="list" style="display: none;"></div>
				<table>
					<tr>
						<td class="table_6">Baujahr</td>
						<td class="table_r">2010 - 2011 / Umbau 1990</td>
					</tr>
					<tr>
						<td class="table_6">Einsatz</td>
						<td class="table_r">StN, ChA, BB</td>
					</tr>
					<tr>
						<td class="table_6 only_here">Ausrangiert</td><!--Nur wenn vorhanden-->
						<td class="table_r">2356, 2359 - 2365</td>
					</tr>
					<tr>
						<td class="table_6 only_here">Noch vorhanden</td><!--Nur wenn vorhanden-->
						<td class="table_r">2356, 2359 - 2365</td>
					</tr>
					<tr>
						<td class="table_6 only_here">Depot</td><!--Nur wenn vorhanden-->
						<td class="table_r">Landquart</td>
					</tr>
				</table>
			</div>

			<div class="group">
				<h3>Technische Daten</h3>
				<div class="list" style="display: none;"></div>
				<table>
					<tr>
						<td class="table_6">Geschwindigkeit</td>
						<td class="table_r">100 km/h</td>
					</tr>
					<tr>
						<td class="table_6">Länge</td>
						<td class="table_r">49.50 m</td>
					</tr>
					<tr>
						<td class="table_6">Gewicht <small>(Tara / Burtto)</small></td>
						<td class="table_r">106 t / 122 t</td>
					</tr>
					<tr>
						<td class="table_6">Bremsgewicht</td>
						<td class="table_r">116 t</td>
					</tr>
					<tr>
						<td class="table_6">Feststellbremse</td>
						<td class="table_r">Fsp 122 kN <small>(H 60 t)</small></td>
					</tr>
				</table>
			</div>

			<div class="group">
				<h3>Fahrzeugausrüstung</h3>
				<div class="list" style="display: none;"></div>
				<table>
					<tr>
						<td class="table_6 only_here">Zug- / Stossvorrichtung</td><!--Nur wenn vorhanden-->
						<td class="table_r">Automatische Kupplung <small>(Schwab)</small> / Stangenpuffer</td>
					</tr>
					<tr>
						<td class="table_6">Vielfachsteuerung</td>
						<td class="table_r">WTB-Zugbus <small>(MZST)</small></td>
					</tr>
					<tr>
						<td class="table_6 only_here">Zugbeeinflussung</td><!--Nur wenn vorhanden-->
						<td class="table_r">ZSI 127</td>
					</tr>
					<tr>
						<td class="table_6">Heizleitung</td>
						<td class="table_r">StN und BB</td>
					</tr>
					<tr>
						<td class="table_6">Speiseluft-Leitung</td>
						<td class="table_r">ja</td>
					</tr>
					<tr>
						<td class="table_6">Bremsleitung</td>
						<td class="table_r">Vakuum-Hauptleitung<br>Druckluft-Hauptleitung <small>(Dual-Bremse)</small></td>
					</tr>
					<tr>
						<td class="table_6">Bremssystem</td>
						<td class="table_r">Vakuumgesteuerte Druckluftbremse<br>Vakuumbremse<br>Druckluftbremse</td>
					</tr>
					<tr>
						<td class="table_6 only_here">Bremszahnrad</td><!--Nur wenn vorhanden-->
						<td class="table_r">ja</td>
					</tr>
					<tr>
						<td class="table_6 not_here">LBT-Leitung</td><!--Nur wenn nicht vorhanden-->
						<td class="table_r">keine</td>
					</tr>
					<tr>
						<td class="table_6">Türen</td>
						<td class="table_r">Aussenbündig, elektrisch</td>
					</tr>
					<tr>
						<td class="table_6">Schiebetor</td>
						<td class="table_r">Manuell, überwacht, elektrisch verriegelt</td>
					</tr>
					<tr>
						<td class="table_6">Notfalleinrichtung</td>
						<td class="table_r">NBA</td>
					</tr>
					<tr>
						<td class="table_6 only_here">Halbfaltenbalg-Lochung</td><!--Nur wenn vorhanden-->
						<td class="table_r">ja</td>
					</tr>
				</table>
			</div>

			<div class="group">
				<h3>Fahrgastausstattung</h3>
				<div class="list" style="display: none;"></div>
				<table>
					<tr>
						<td class="table_6">Ladefläche</td>
						<td class="table_r">1t / 5.9 m<sup>2</sup></td>
					</tr>
					<tr>
						<td class="table_6">Rollstuhlplätze</td>
						<td class="table_r">2 <small>(bis max. 6 Rollstühle)</small></td>
					</tr>
					<tr>
						<td class="table_6">WC-System</td>
						<td class="table_r">1x geschlossen, rollstuhltauglich</td>
					</tr>
					<tr>
						<td class="table_6">Velohaken</td>
						<td class="table_r">4</td>
					</tr>
					<tr>
						<td class="table_6">Fahrgastinfosystem</td>
						<td class="table_r">KIS</td>
					</tr>
					<tr>
						<td class="table_6 only_here">Zugzielanzeigen</td><!--Nur wenn vorhanden-->
						<td class="table_r">innen und aussen</td>
					</tr>
					<tr>
						<td class="table_6 only_here">Videoüberwachung</td><!--Nur wenn vorhanden-->
						<td class="table_r">ja</td>
					</tr>
				</table>
			</div>
`

// #################################################################################################
var store_gleisbaumaschinen = `
			<div class="group">
				<h3>Allgemein</h3>
				<div class="list" style="display: none;"></div>
				<table>
					<tr>
						<td class="table_6">Fahrzeug-Nummer RhB</td>
						<td class="table_r">210144</td>
					</tr>
					<tr>
						<td class="table_6">Eigentümer</td>
						<td class="table_r">Sersa</td>
					</tr>
					<tr>
						<td class="table_6">Baujahr</td>
						<td class="table_r">2010 / Umbau 2020</td>
					</tr>
					<tr>
						<td class="table_6">Einsatz</td>
						<td class="table_r">StN, ChA, BB</td>
					</tr>
					<tr>
						<td class="table_6">Anzahl Achsen</td>
						<td class="table_r">5</td>
					</tr>
					
				</table>
			</div>

			<div class="group">
				<h3>Technische Daten</h3>
				<div class="list" style="display: none;"></div>
				<table>
					<tr>
						<td class="table_6">Geschwindigkeit Eigenfahrt</td>
						<td class="table_r">60 km/h <small>(Reihe R)</small></td>
					</tr>
					<tr>
						<td class="table_6">Länge</td>
						<td class="table_r">49.50 m</td>
					</tr>
					<tr>
						<td class="table_6">Gesammtgewicht</td>
						<td class="table_r">106 t</td>
					</tr>
					<tr>
						<td class="table_6 only_here">Gewicht <small>(Tara / Zuladung)</small></td><!--Nur wenn vorhanden-->
						<td class="table_r">50.0 t <small>(Wagen)</small> / 12.0 t <small>(Kran)</small></td>
					</tr>
					<tr>
						<td class="table_6">Bremsgewicht</td>
						<td class="table_r">116 t</td>
					</tr>
					<tr>
						<td class="table_6 only_here">Magnetschienen&shy;bremse</td><!--Nur wenn vorhanden-->
						<td class="table_r">20t <small>(nur in Eigenfahrt / BG total = 82 t)</small></td>
					</tr>
					<tr>
						<td class="table_6">Feststellbremse</td>
						<td class="table_r">Fsp 122 kN <small>(H 60 t)</small></td>
					</tr>
				</table>
			</div>

			<div class="group">
				<h3>Fahrzeugausrüstung</h3>
				<div class="list" style="display: none;"></div>
				<table>
					<tr>
						<td class="table_6 only_here">Zug-/ Stossvorrichtung</td><!--Nur wenn vorhanden-->
						<td class="table_r">Automatische Kupplung (Schwab) / Stangenpuffer</td>
					</tr>
					<tr>
						<td class="table_6 only_here">Nylatron-Pufferplatten</td><!--Nur wenn vorhanden-->
						<td class="table_r">ja</td>
					</tr>
					<tr>
						<td class="table_6">Zugbeeinflussung</td>
						<td class="table_r">ZSI 127</td>
					</tr>
					<tr>
						<td class="table_6">Bremssystem Eigenfahrt</td>
						<td class="table_r">Druckluftbremse</td>
					</tr>
					<tr>
						<td class="table_6">Bremsleitung</td>
						<td class="table_r">Vakuum-Hauptleitung<br>Druckluft-Hauptleitung</td>
					</tr>
					<tr>
						<td class="table_6">Speiseluft-Leitung</td>
						<td class="table_r">ja</td>
					</tr>
					<tr>
						<td class="table_6 only_here">Ladefläche</td><!--Nur wenn vorhanden-->
						<td class="table_r">22.0 m<sup>2</sup></td>
					</tr>
				</table>
			</div>

			<div class="group">
				<h3>Fahrzeug geschleppt</h3>
				<div class="list" style="display: none;"></div>
				<table>
					<tr>
						<td class="table_6">Einreihung im Zug</td>
						<td class="table_r">beliebig</td>
					</tr>
					<tr>
						<td class="table_6">Geschwindigkeit geschleppt</td>
						<td class="table_r">60 km/h <small>(Zugreihe D)</small></td>
					</tr>
					<tr>
						<td class="table_6">Bremssystem geschleppt</td>
						<td class="table_r">Vakuumbremse</td>
					</tr>
					<tr>
						<td class="table_6">Speiseluft-Leitung</td>
						<td class="table_r">muss verbunden sein</td>
					</tr>
					<tr>
						<td class="table_6">Bremsgewicht</td>
						<td class="table_r">60 t</td>
					</tr>
					<tr>
						<td class="table_6 only_here">Zugehöriger Materialwagen</td><!--Nur wenn vorhanden-->
						<td class="table_r"><a href="">P10174</a></td>
					</tr>
				</table>
			</div>
`

// #################################################################################################
var store_gueterwagen = `
			<div class="group">
				<h3>Allgemein</h3>
				<div class="list" style="display: none;"></div>
				<table>
					<tr>
						<td class="table_6">Baujahr</td>
						<td class="table_r">2010 - 2011 / Umbau 1990</td>
					</tr>
					<tr>
						<td class="table_6">Einsatz</td>
						<td class="table_r">StN, ChA, BB</td>
					</tr>
					<tr>
						<td class="table_6 only_here">Ausrangiert</td><!--Nur wenn vorhanden-->
						<td class="table_r">2356, 2359 - 2365</td>
					</tr>
					<tr>
						<td class="table_6 only_here">Noch vorhanden</td><!--Nur wenn vorhanden-->
						<td class="table_r">2356, 2359 - 2365</td>
					</tr>
					<tr>
						<td class="table_6 only_here">Depot</td><!--Nur wenn vorhanden-->
						<td class="table_r">Landquart</td>
					</tr>
				</table>
			</div>

			<div class="group">
				<h3>Technische Daten</h3>
				<div class="list" style="display: none;"></div>
				<table>
					<tr>
						<td class="table_6">Geschwindigkeit max.</td>
						<td class="table_r">100 km/h <small>(Reihe R)</small></td>
					</tr>
					<tr>
						<td class="table_6">Länge</td>
						<td class="table_r">49.50 m</td>
					</tr>
					<tr>
						<td class="table_6">Gewicht <small>(Tara)</small></td>
						<td class="table_r">15'300 kg</td>
					</tr>
					<tr>
						<td class="table_6">Raster Ladegewicht</td>
						<td class="table_r">
							<table class="ladegewicht_table">
								<tr>
									<td class="ladegewicht_top">80R</td>
									<td class="ladegewicht_top">80A</td>
									<td class="ladegewicht_top">60D</td>
								</tr>
								<tr>
									<td class="ladegewicht_bottom">12 t</td>
									<td class="ladegewicht_bottom">23 t</td>
									<td class="ladegewicht_bottom">30 t</td>
								</tr>
							</table>
						</td>
					</tr>
					<tr>
						<td class="table_6">Bremsgewicht</td>
						<td class="table_r">L13 <small class="underlined">U16</small> B18 <small class="underlined">U24</small> B24</td>
					</tr>
					<tr>
						<td class="table_6">Feststellbremse</td>
						<td class="table_r">H 17 / 44 kN <small>(H 60 t)</small></td>
					</tr>
				</table>
			</div>

			<div class="group">
				<h3>Fahrzeugausrüstung</h3>
				<div class="list" style="display: none;"></div>
				<table>
					<tr>
						<td class="table_6 only_here">Zug- / Stossvorrichtung</td><!--Nur wenn vorhanden-->
						<td class="table_r">Automatische Kupplung <small>(Schwab)</small> / Stangenpuffer</td>
					</tr>
					<tr>
						<td class="table_6 only_here">Vielfachsteuerung</td><!--Nur wenn vorhanden-->
						<td class="table_r">WTB-Zugbus <small>(MZST)</small></td>
					</tr>
					<tr>
						<td class="table_6">Heizleitung</td>
						<td class="table_r">StN und BB</td>
					</tr>
					<tr>
						<td class="table_6">Speiseluft-Leitung</td>
						<td class="table_r">ja</td>
					</tr>
					<tr>
						<td class="table_6">Bremsleitungen</td>
						<td class="table_r">Vakuum-Hauptleitung<br>Druckluft-Hauptleitung <small>(Dual-Bremse)</small></td>
					</tr>
					<tr>
						<td class="table_6">Bremssystem</td>
						<td class="table_r">Vakuumgesteuerte Druckluftbremse<br>Vakuumbremse<br>Druckluftbremse</td>
					</tr>
					<tr>
						<td class="table_6 only_here">Bremszahnrad</td><!--Nur wenn vorhanden-->
						<td class="table_r">ja</td>
					</tr>
					<tr>
						<td class="table_6">LBT-Leitung</td>
						<td class="table_r">keine</td>
					</tr>
				</table>
			</div>

			<div class="group">
				<h3>Fahrzeugaufbau</h3>
				<div class="list" style="display: none;"></div>
				<table>
					<tr>
						<td class="table_6 only_here">Ladefläche</td><!--Nur wenn vorhanden-->
						<td class="table_r">5.9 m<sup>2</sup></td>
					</tr>
					<tr>
						<td class="table_6 only_here">Tankinhalt</td><!--Nur wenn vorhanden-->
						<td class="table_r">42'000 Liter</td>
					</tr>
					<tr>
						<td class="table_6 only_here">Ladevolumen</td><!--Nur wenn vorhanden-->
						<td class="table_r">34.0 m<sup>3</sup></td>
					</tr>
					<tr>
						<td class="table_6 only_here">Schiebetor</td><!--Nur wenn vorhanden-->
						<td class="table_r">Isolierte Schiebewände</td>
					</tr>
					<tr>
						<td class="table_6 only_here">Kühlaggregat</td><!--Nur wenn vorhanden-->
						<td class="table_r">ja</td>
					</tr>
					<tr>
						<td class="table_6 only_here">Bodenheizung</td><!--Nur wenn vorhanden-->
						<td class="table_r">StN und BB</td>
					</tr>

					<!-- Rungen, Seitenwände, Bühnengeländer, Spanngurte, Containeraufnahme, Gleitbahn Rollcontainer -->
					<tr>
						<td class="table_6">Rungen</td><!--Gruppe 1-->
						<td class="table_r">drehbar / fest, verschraubt</td>
					</tr>
					<tr>
						<td class="table_6">Seitenwände</td><!--Gruppe 1-->
						<td class="table_r">abklappbar</td>
					</tr>
					<tr>
						<td class="table_6">Bühnengeländer</td><!--Gruppe 1-->
						<td class="table_r">steckbar</td>
					</tr>
					<tr>
						<td class="table_6">Spanngurte</td><!--Gruppe 1-->
						<td class="table_r">ja</td>
					</tr>
					<tr>
						<td class="table_6">Containeraufnahme</td><!--Gruppe 1-->
						<td class="table_r">keine</td>
					</tr>
					<tr>
						<td class="table_6">Gleitbahn Rollcontainer</td><!--Gruppe 1-->
						<td class="table_r">keine</td>
					</tr>

					<!-- Aufbau, Aufteilung, Schüttung, Rüttler, Förderbandaufnahme, Kippvorrichtung, Zusätzliche Schüttklappe, Beladungsanzeige -->
					<tr>
						<td class="table_6">Aufbau</td><!--Gruppe 2-->
						<td class="table_r">Weichentraggerüst</td>
					</tr>

					<tr>
						<td class="table_6">Aufteilung</td><!--Gruppe 3-->
						<td class="table_r">2 Silo</td>
					</tr>
					<tr>
						<td class="table_6">Schüttung</td><!--Gruppe 3-->
						<td class="table_r">Hydraulisch, aussen und innen</td>
					</tr>
					<tr>
						<td class="table_6">Rüttler</td><!--Gruppe 3-->
						<td class="table_r">ja, elektrisch</td>
					</tr>

					<tr>
						<td class="table_6">Förderbandaufnahme</td><!--Gruppe 4-->
						<td class="table_r">ja</td>
					</tr>
					<tr>
						<td class="table_6">Kippvorrichtung</td><!--Gruppe 4-->
						<td class="table_r">Elektro-Hydraulisch</td>
					</tr>
					<tr>
						<td class="table_6">Zusätzliche Schüttklappe</td><!--Gruppe 4-->
						<td class="table_r">keine</td>
					</tr>
					<tr>
						<td class="table_6">Beladungsanzeige</td><!--Gruppe 4-->
						<td class="table_r">keine</td>
					</tr>

					<tr>
						<td class="table_6">Spezielles</td>
						<td class="table_r">Darf ohne Container nur ungebremst verkehren</td>
					</tr>
				</table>
			</div>

			<div class="group"><!--Nur wenn vorhanden-->
				<h3 class="only_here">Gewichte mit aufgesetztem Aufbau</h3>
				<div class="list" style="display: none;"></div>
				<table>
					<tr>
						<td class="table_6">Gewicht <small>(Tara)</small></td>
						<td class="table_r">26'590 kg</td>
					</tr>
					<tr>
						<td class="table_6">Raster Ladegewicht</td>
						<td class="table_r">
							<table class="ladegewicht_table">
								<tr>
									<td class="ladegewicht_top">80R</td>
									<td class="ladegewicht_top">80A</td>
									<td class="ladegewicht_top">60D</td>
								</tr>
								<tr>
									<td class="ladegewicht_bottom">12 t</td>
									<td class="ladegewicht_bottom">23 t</td>
									<td class="ladegewicht_bottom">30 t</td>
								</tr>
							</table>
						</td>
					</tr>
					<tr>
						<td class="table_6">Bremsgewicht</td>
						<td class="table_r">L13 <small class="underlined">U16</small> B18 <small class="underlined">U24</small> B24</td>
					</tr>
					<tr>
						<td class="table_6">Feststellbremse</td>
						<td class="table_r">H 17 / 44 kN</td>
					</tr>
				</table>
			</div>
`

// #################################################################################################
var store_lokomotiven = `
			<div class="group">
				<h3>Allgemein</h3>
				<div class="list" style="display: none;"></div>
				<table>
					<tr>
						<td class="table_6">Baujahr</td>
						<td class="table_r">2010 - 2011 / Umbau 2020</td>
					</tr>
					<tr>
						<td class="table_6">Einsatz</td>
						<td class="table_r">StN, ChA, BB</td>
					</tr>
					<tr>
						<td class="table_6">Antriebstechnik</td>
						<td class="table_r">Umrichtersteuerung</td>
					</tr>
					<tr>
						<td class="table_6">Leistung</td>
						<td class="table_r">StN: 3808 PS / 2800 kW<br>BB: 3264 PS / 2400 kW</td>
					</tr>
					<tr>
						<td class="table_6">Ergänzungs&shy;bremse</td>
						<td class="table_r">Bremswiderstände / Rekuperationbremse</td>
					</tr>
					<tr>
						<td class="table_6 only_here">Depot</td><!--Nur wenn vorhanden-->
						<td class="table_r">Landquart</td>
					</tr>
				</table>
			</div>

			<div class="group">
				<h3>Technische Daten</h3>
				<div class="list" style="display: none;"></div>
				<table>
					<tr>
						<td class="table_6">Geschwindigkeit</td>
						<td class="table_r">100 km/h <small>(Reihe A)</small></td>
					</tr>
					<tr>
						<td class="table_6">Länge</td>
						<td class="table_r">49.50 m</td>
					</tr>
					<tr>
						<td class="table_6">Gewicht</td>
						<td class="table_r">106 t</td>
					</tr>
					<tr>
						<td class="table_6">Bremsgewicht</td>
						<td class="table_r">116 t</td>
					</tr>
					<tr>
						<td class="table_6 only_here">Magnetschienen&shy;bremse</td><!--Nur wenn vorhanden-->
						<td class="table_r">20 t <small>(BG total = 156 t)</small></td>
					</tr>
					<tr>
						<td class="table_6">Feststellbremse</td>
						<td class="table_r">Fsp 122 kN <small>(H 60 t)</small></td>
					</tr>
					<tr>
						<td class="table_6 only_here">Zusatz-Bremse</td><!--Nur wenn vorhanden-->
						<td class="table_r">Bremszylinder - Verriegelung</td>
					</tr>
					<tr>
						<td class="table_6 only_here">Kesseldruck</td><!--Nur wenn vorhanden-->
						<td class="table_r">12 bar</td>
					</tr>
					<tr>
						<td class="table_6 only_here">Wasservorrat</td><!--Nur wenn vorhanden-->
						<td class="table_r">9.9 m<sup>3</sup></td>
					</tr>
					<tr>
						<td class="table_6 only_here">Kohlenvorrat</td><!--Nur wenn vorhanden-->
						<td class="table_r">2.5 t</td>
					</tr>
				</table>
			</div>

			<div class="group">
				<h3>Fahrzeugausrüstung</h3>
				<div class="list" style="display: none;"></div>
				<table>
					<tr>
						<td class="table_6 only_here">Zug-/ Stossvorrichtung</td><!--Nur wenn vorhanden-->
						<td class="table_r">Automatische Kupplung (Schwab) / Stangenpuffer</td>
					</tr>
					<tr>
						<td class="table_6 pufferplatten only_here">Nylatron-Pufferplatten</td><!--Nur bei Lokomotiven und Rangierlokomotiven-->
						<td class="table_r">ja</td>
					</tr>
					<tr>
						<td class="table_6">Vielfachsteuerung</td>
						<td class="table_r">WTB-Zugbus <small>(MZST)</small></td>
					</tr>
					<tr>
						<td class="table_6 fernsteuerung only_here">Funkfernsteuerung</td><!--Nur wenn vorhanden (bei Traktoren immer)-->
						<td class="table_r">ja</td>
					</tr>
					<tr>
						<td class="table_6">Zugbeeinflussung</td>
						<td class="table_r">ZSI 127</td>
					</tr>
					<tr>
						<td class="table_6">Heizleitung</td>
						<td class="table_r">StN und BB</td>
					</tr>
					<tr>
						<td class="table_6">Speiseluft-Leitung</td>
						<td class="table_r">ja</td>
					</tr>
					<tr>
						<td class="table_6">Bremssystem</td>
						<td class="table_r">Vakuum-Hauptleitung<br>Druckluft-Hauptleitung <small>(Dual-Bremse)</small></td>
					</tr>
					<tr>
						<td class="table_6 not_here">LBT-Leitung</td><!--Nur wenn nicht vorhanden-->
						<td class="table_r">keine</td>
					</tr>
					<tr>
						<td class="table_6 only_here">Steuerleitung Spurpflug</td><!--Nur wenn vorhanden-->
						<td class="table_r">ja</td>
					</tr>
					<tr>
						<td class="table_6 only_here">Ladefläche</td><!--Nur wenn vorhanden-->
						<td class="table_r">Mulde seitlich kippbar, 7.3 m<sup>3</sup><br>Zuladung 4 t</td>
					</tr>
				</table>
			</div>
`

// #################################################################################################
var store_personenwagen = `
			<div class="group">
				<h3>Allgemein</h3>
				<div class="list" style="display: none;"></div>
				<table>
					<tr>
						<td class="table_6">Baujahr</td>
						<td class="table_r">2010 - 2011 / Umbau 1990</td>
					</tr>
					<tr>
						<td class="table_6">Einsatz</td>
						<td class="table_r">StN, ChA, BB</td>
					</tr>
					<tr>
						<td class="table_6 only_here">Ausrangiert</td><!--Nur wenn vorhanden-->
						<td class="table_r">2356, 2359 - 2365</td>
					</tr>
					<tr>
						<td class="table_6 only_here">Noch vorhanden</td><!--Nur wenn vorhanden-->
						<td class="table_r">2356, 2359 - 2365</td>
					</tr>
					<tr>
						<td class="table_6 only_here">Depot</td><!--Nur wenn vorhanden-->
						<td class="table_r">Landquart</td>
					</tr>
				</table>
			</div>

			<div class="group">
				<h3>Technische Daten</h3>
				<div class="list" style="display: none;"></div>
				<table>
					<tr>
						<td class="table_6">Geschwindigkeit</td>
						<td class="table_r">100 km/h</td>
					</tr>
					<tr>
						<td class="table_6">Länge</td>
						<td class="table_r">49.50 m</td>
					</tr>
					<tr>
						<td class="table_6">Gewicht <small>(Tara / Burtto)</small></td>
						<td class="table_r">106 t / 122 t</td>
					</tr>
					<tr>
						<td class="table_6">Bremsgewicht</td>
						<td class="table_r">116 t</td>
					</tr>
					<tr>
						<td class="table_6">Feststellbremse</td>
						<td class="table_r">Fsp 122 kN <small>(H 60 t)</small></td>
					</tr>
				</table>
			</div>

			<div class="group">
				<h3>Fahrzeugausrüstung</h3>
				<div class="list" style="display: none;"></div>
				<table>
					<tr>
						<td class="table_6 only_here">Zug- / Stossvorrichtung</td><!--Nur wenn vorhanden-->
						<td class="table_r">Automatische Kupplung <small>(Schwab)</small> / Stangenpuffer</td>
					</tr>
					<tr>
						<td class="table_6">Nylatron-Pufferplatten</td>
						<td class="table_r">ja</td>
					</tr>
					<tr>
						<td class="table_6">Vielfachsteuerung</td>
						<td class="table_r">WTB-Zugbus <small>(MZST)</small></td>
					</tr>
					<tr>
						<td class="table_6">Zugbeeinflussung</td>
						<td class="table_r">ZSI 127</td>
					</tr>
					<tr>
						<td class="table_6">Heizleitung</td>
						<td class="table_r">StN und BB</td>
					</tr>
					<tr>
						<td class="table_6">Speiseluft-Leitung</td>
						<td class="table_r">ja</td>
					</tr>
					<tr>
						<td class="table_6">Bremsleitungen</td>
						<td class="table_r">Vakuum-Hauptleitung<br>Druckluft-Hauptleitung <small>(Dual-Bremse)</small></td>
					</tr>
					<tr>
						<td class="table_6">Bremssystem</td>
						<td class="table_r">Vakuumgesteuerte Druckluftbremse</td>
					</tr>
					<tr>
						<td class="table_6 only_here">Bremszahnrad</td><!--Nur wenn vorhanden-->
						<td class="table_r">ja</td>
					</tr>
					<tr>
						<td class="table_6 not_here">LBT-Leitung</td><!--Nur wenn nicht vorhanden-->
						<td class="table_r">keine</td>
					</tr>
					<tr>
						<td class="table_6">Türen</td>
						<td class="table_r">Aussenbündig, elektrisch</td>
					</tr>
					<tr>
						<td class="table_6 only_here">Schiebetor</td><!--Nur wenn vorhanden-->
						<td class="table_r">Manuell, überwacht, elektrisch verriegelt</td>
					</tr>
					<tr>
						<td class="table_6">Notfalleinrichtung</td>
						<td class="table_r">NBA</td>
					</tr>
					<tr>
						<td class="table_6 only_here">Halbfaltenbalg-Lochung</td><!--Nur wenn vorhanden-->
						<td class="table_r">ja</td>
					</tr>
				</table>
			</div>

			<div class="group">
				<h3>Fahrgastausstattung</h3>
				<div class="list" style="display: none;"></div>
				<table>
					<tr>
						<td class="table_6">Plätze 1. Klasse</td>
						<td class="table_r">24</td>
					</tr>
					<tr>
						<td class="table_6">Plätze 2. Klasse</td>
						<td class="table_r">76</td>
					</tr>
					<tr>
						<td class="table_6">Klappsitze</td>
						<td class="table_r">14</td>
					</tr>
					<tr>
						<td class="table_6">Niederflureinstiege</td>
						<td class="table_r">1</td>
					</tr>
					<tr>
						<td class="table_6 only_here">Ladefläche</td><!--Nur wenn vorhanden-->
						<td class="table_r">1t / 5.9 m<sup>2</sup></td>
					</tr>
					<tr>
						<td class="table_6">Rollstuhlplätze</td>
						<td class="table_r">2 <small>(bis max. 6 Rollstühle)</small></td>
					</tr>
					<tr>
						<td class="table_6">WC-System</td>
						<td class="table_r">1x geschlossen, rollstuhltauglich</td>
					</tr>
					<tr>
						<td class="table_6">Velohaken</td>
						<td class="table_r">4</td>
					</tr>
					<tr>
						<td class="table_6">Fahrgastinfosystem</td>
						<td class="table_r">KIS</td>
					</tr>
					<tr>
						<td class="table_6">Zugzielanzeigen</td>
						<td class="table_r">innen und aussen</td>
					</tr>
					<tr>
						<td class="table_6">Fahrgastzählung</td>
						<td class="table_r">AFZ - Master</td>
					</tr>
					<tr>
						<td class="table_6 only_here">Videoüberwachung</td><!--Nur wenn vorhanden-->
						<td class="table_r">ja</td>
					</tr>
					<tr>
						<td class="table_6 only_here">Infotainment</td><!--Nur wenn vorhanden-->
						<td class="table_r">ja</td>
					</tr>
					<tr>
						<td class="table_6 only_here">Tonstudio</td><!--Nur wenn vorhanden-->
						<td class="table_r">ja</td>
					</tr>
				</table>
			</div>
`

// #################################################################################################
var store_triebwagen = `
			<div class="group">
				<h3>Allgemein</h3>
				<div class="list" style="display: none;"></div>
				<table>
					<tr>
						<td class="table_6">Baujahr</td>
						<td class="table_r">2010 - 2011</td>
					</tr>
					<tr>
						<td class="table_6">Einsatz</td>
						<td class="table_r">StN, ChA, BB</td>
					</tr>
					<tr>
						<td class="table_6">Antriebstechnik</td>
						<td class="table_r">Umrichtersteuerung</td>
					</tr>
					<tr>
						<td class="table_6">Leistung</td>
						<td class="table_r">StN: 3808 PS / 2800 kW<br>BB: 3264 PS / 2400 kW</td>
					</tr>
					<tr>
						<td class="table_6">Ergänzungs&shy;bremse</td>
						<td class="table_r">Bremswiderstände / Rekuperationsbremse</td>
					</tr>
					<tr>
						<td class="table_6 only_here">Depot</td><!--Nur wenn vorhanden-->
						<td class="table_r">Landquart</td>
					</tr>
				</table>
			</div>

			<div class="group">
				<h3>Technische Daten</h3>
				<div class="list" style="display: none;"></div>
				<table>
					<tr>
						<td class="table_6">Geschwindigkeit</td>
						<td class="table_r">100 km/h</td>
					</tr>
					<tr>
						<td class="table_6">Länge</td>
						<td class="table_r">49.50 m</td>
					</tr>
					<tr>
						<td class="table_6">Gewicht <small>(Tara / Burtto)</small></td>
						<td class="table_r">106 t / 122 t</td>
					</tr>
					<tr>
						<td class="table_6">Bremsgewicht</td>
						<td class="table_r">116 t / 136 t</td>
					</tr>
					<tr>
						<td class="table_6 only_here">Magnetschienen&shy;bremse</td><!--Nur wenn vorhanden-->
						<td class="table_r">20 t <small>(BG total = 156 t)</small></td>
					</tr>
					<tr>
						<td class="table_6">Feststellbremse</td>
						<td class="table_r">Fsp 122 kN <small>(H 60 t)</small></td>
					</tr>
					<tr>
						<td class="table_6 only_here">Zusatz-Bremse</td><!--Nur wenn vorhanden-->
						<td class="table_r">Bremszylinder - Verriegelung</td>
					</tr>
				</table>
			</div>

			<div class="group">
				<h3>Fahrzeugausrüstung</h3>
				<div class="list" style="display: none;"></div>
				<table>
					<tr>
						<td class="table_6 only_here">Zug- / Stossvorrichtung</td><!--Nur wenn vorhanden-->
						<td class="table_r">Automatische Kupplung <small>(Schwab)</small> / Stangenpuffer</td>
					</tr>
					<tr>
						<td class="table_6">Nylatron-Pufferplatten</td>
						<td class="table_r">ja</td>
					</tr>
					<tr>
						<td class="table_6">Vielfachsteuerung</td>
						<td class="table_r">WTB-Zugbus <small>(MZST)</small></td>
					</tr>
					<tr>
						<td class="table_6 only_here">Funkfernsteuerung</td><!--Nur wenn vorhanden-->
						<td class="table_r">ja</td>
					</tr>
					<tr>
						<td class="table_6">Zugbeeinflussung</td>
						<td class="table_r">ZSI 127</td>
					</tr>
					<tr>
						<td class="table_6">Heizleitung</td>
						<td class="table_r">StN und BB</td>
					</tr>
					<tr>
						<td class="table_6">Speiseluft-Leitung</td>
						<td class="table_r">ja</td>
					</tr>
					<tr>
						<td class="table_6">Bremssystem</td>
						<td class="table_r">Vakuum-Hauptleitung<br>Druckluft-Hauptleitung <small>(Dual-Bremse)</small></td>
					</tr>
					<tr>
						<td class="table_6 only_here">Bremszahnrad</td><!--Nur wenn vorhanden-->
						<td class="table_r">ja</td>
					</tr>
					<tr>
						<td class="table_6 not_here">LBT-Leitung</td><!--Nur wenn nicht vorhanden-->
						<td class="table_r">keine</td>
					</tr>
					<tr>
						<td class="table_6 only_here">Steuerleitung Spurpflug</td><!--Nur wenn vorhanden-->
						<td class="table_r">ja</td>
					</tr>
					<tr>
						<td class="table_6">Türen</td>
						<td class="table_r">Aussenbündig, elektrisch</td>
					</tr>
					<tr>
						<td class="table_6 only_here">Schiebetor</td><!--Nur wenn vorhanden-->
						<td class="table_r">Manuell, überwacht, elektrisch verriegelt</td>
					</tr>
					<tr>
						<td class="table_6">Notfalleinrichtung</td>
						<td class="table_r">NBA</td>
					</tr>
					<tr>
						<td class="table_6 only_here">Halbfaltenbalg-Lochung</td><!--Nur wenn vorhanden-->
						<td class="table_r">ja</td>
					</tr>
				</table>
			</div>

			<div class="group">
				<h3>Fahrgastausstattung</h3>
				<div class="list" style="display: none;"></div>
				<table>
					<tr>
						<td class="table_6">Plätze 1. Klasse</td>
						<td class="table_r">24</td>
					</tr>
					<tr>
						<td class="table_6">Plätze 2. Klasse</td>
						<td class="table_r">76</td>
					</tr>
					<tr>
						<td class="table_6">Klappsitze</td>
						<td class="table_r">14</td>
					</tr>
					<tr>
						<td class="table_6">Niederflureinstiege</td>
						<td class="table_r">1</td>
					</tr>
					<tr>
						<td class="table_6 only_here">Ladefläche</td><!--Nur wenn vorhanden-->
						<td class="table_r">1 t / 5.9 m<sup>2</sup></td>
					</tr>
					<tr>
						<td class="table_6">Rollstuhlplätze</td>
						<td class="table_r">2 <small>(bis max. 6 Rollstühle)</small></td>
					</tr>
					<tr>
						<td class="table_6">WC-System</td>
						<td class="table_r">1x geschlossen, rollstuhltauglich</td>
					</tr>
					<tr>
						<td class="table_6">Velohaken</td>
						<td class="table_r">4</td>
					</tr>
					<tr>
						<td class="table_6">Fahrgastinfo&shy;system</td>
						<td class="table_r">KIS</td>
					</tr>
					<tr>
						<td class="table_6">Zugzielanzeigen</td>
						<td class="table_r">innen und aussen</td>
					</tr>
					<tr>
						<td class="table_6">Fahrgastzählung</td>
						<td class="table_r">AFZ - Master</td>
					</tr>
					<tr>
						<td class="table_6 only_here">Videoüberwachung</td><!--Nur wenn vorhanden-->
						<td class="table_r">ja</td>
					</tr>
					<tr>
						<td class="table_6 only_here">Videokamera Front</td><!--Nur wenn vorhanden-->
						<td class="table_r">ja</td>
					</tr>
				</table>
			</div>
`