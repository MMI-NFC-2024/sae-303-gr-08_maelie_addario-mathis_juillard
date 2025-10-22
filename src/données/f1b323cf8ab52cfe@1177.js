function _1(md){return(
md`# SAE 303 (Groupe 8)`
)}

function _defi(Inputs){return(
Inputs.select(
  [null, "Santé et Territoire", "Tourisme en train", "Offre culturelle"],
  { label: "Défi" }
)
)}

function _3(html)
{
  // -------- Header (sans logo, sans contact)
  const el = html`
    <header class="hdr">
      <!-- ruban dégradé -->
      <div class="hdr__ribbon"></div>

      <div class="hdr__body">
        <div class="hdr__tags">
          <span class="tag">SAE 303</span>
          <span class="tag tag--accent">Groupe 8</span>
        </div>

        <h1 class="hdr__title">
          Santé & Territoires
          <span class="bar"></span>
        </h1>

        <p class="hdr__strap">Là où l’âge avance plus vite que l’accès aux soins</p>

        <p class="hdr__meta">
          <strong>Maëlie ADDARIO</strong> &middot; <strong>Mathis JUILLARD</strong>
          — MMI2 CRÉA&nbsp;1 — Octobre&nbsp;2025
        </p>
      </div>
    </header>

    <style>
      /* --- Palette & thèmes (rouge → orange → jaune) --- */
      :root{
        --bg:#ffffff;
        --card:#f8fafc;
        --ink:#0f172a;
        --muted:#475569;
        --line:#e2e8f0;
        --shadow:0 6px 24px rgba(2,6,23,.06);

        --grad1:#ef4444; /* red-500   */
        --grad2:#f59e0b; /* amber-500 */
        --grad3:#facc15; /* yellow-400 */
      }
      @media (prefers-color-scheme: dark){
        :root{
          --bg:#0b1020;
          --card:#11162a;
          --ink:#e2e8f0;
          --muted:#94a3b8;
          --line:#1e293b;
          --shadow:0 8px 28px rgba(0,0,0,.35);
        }
      }

      .hdr{
        position:relative;
        border-radius:16px;
        overflow:hidden;
        background:var(--card);
        border:1px solid var(--line);
        box-shadow:var(--shadow);
      }

      /* ruban en haut */
      .hdr__ribbon{
        height:8px;
        background:linear-gradient(90deg,var(--grad1),var(--grad2),var(--grad3));
        background-size:200% 100%;
        animation:slide 8s linear infinite;
      }
      @keyframes slide {
        0%{background-position:0% 50%}
        100%{background-position:100% 50%}
      }

      .hdr__body{
        padding:18px 22px 20px;
      }

      .hdr__tags{
        display:flex; gap:8px; flex-wrap:wrap; margin-bottom:8px;
      }
      .tag{
        font:600 12px/1.2 ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto;
        padding:6px 10px; border-radius:999px;
        color:var(--ink);
        background:rgba(100,116,139,.12);
        border:1px solid var(--line);
      }
      .tag--accent{
        background:rgba(245,158,11,.18);
        border-color:rgba(245,158,11,.42);
      }

      .hdr__title{
        margin:2px 0 6px;
        font:800 26px/1.15 ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto;
        color:var(--ink);
        position:relative;
        display:inline-block;
        padding-bottom:8px;
      }
      .hdr__title .bar{
        position:absolute; left:0; right:0; bottom:0; height:4px; border-radius:999px;
        background:linear-gradient(90deg,var(--grad1),var(--grad2),var(--grad3),var(--grad2),var(--grad1));
        background-size:200% 100%;
        animation:flame 5s linear infinite;
        content:"";
        display:block;
      }
      @keyframes flame{
        0%{background-position:0% 50%}
        100%{background-position:100% 50%}
      }

      .hdr__strap{
        margin:0 0 8px;
        font:600 14px/1.45 ui-sans-serif,system-ui;
        color:var(--muted);
      }
      .hdr__meta{
        margin:0;
        font:500 13px/1.5 ui-sans-serif,system-ui;
        color:var(--muted);
      }

      @media (max-width:720px){
        .hdr__title{ font-size:22px; }
      }
    </style>
  `;

  return el;
}


function _4(md){return(
md`___`
)}

function _5(md){return(
md`# Là où l’âge avance plus vite que l’accès aux soins`
)}

function _6(md){return(
md`_ Identifier les communes où la double vulnérabilité (APL MG faible + population âgée) s’accumule, et quoi faire en priorité._
`
)}

function _7(md){return(
md`En France, l’accès aux soins n’est pas qu’une question de kilomètres. Dans certains territoires, les médecins généralistes se raréfient pendant que la part des 65+ explose. Où ces deux dynamiques se cumulent-elles ? Et que peut-on faire, concrètement, dès maintenant ?`
)}

function _8(md){return(
md`___`
)}

function _9(md){return(
md`# 1) Données & sources`
)}

function _10(md){return(
md`_Sources ouvertes utilisées_`
)}

function _11(md){return(
md`## 1.1 APL MG 2022 (communes)

- Indicateur d’accessibilité potentielle localisée aux médecins généralistes.
 Fichier : apl_communes.csv — Champs : code_commune, annee, apl_total, code_dept`
)}

function _apl_tidy(apl_2022,apl_communes13){return(
[
  ...apl_2022.map((d) => ({
    code_commune: String(d.code_commune).padStart(5, "0"),
    code_dept: String(d.code_dept).padStart(2, "0"),
    annee: +d.annee || 2022,
    apl: +d.apl_total
  })),
  ...apl_communes13.map((d) => ({
    code_commune: String(d.code_commune).padStart(5, "0"),
    code_dept: String(d.code_dept).padStart(2, "0"),
    annee: +d.annee || 2023,
    apl: +d.apl_total
  }))
].filter((d) => !isNaN(d.apl))
)}

function _apl_2022(__query,FileAttachment,invalidation){return(
__query(FileAttachment("apl_communes_2022_from_excel.csv"),{from:{table:"apl_communes_2022_from_excel"},sort:[],slice:{to:null,from:null},types:[{name:"code_commune",type:"string"},{name:"code_dept",type:"string"},{name:"annee",type:"string"}],filter:[],select:{columns:null}},invalidation)
)}

function _14(md){return(
md`## 1.2 APL MG 2023 (communes)`
)}

function _communes(FileAttachment){return(
FileAttachment("communes.geojson").json()
)}

function _apl_communes13(__query,FileAttachment,invalidation){return(
__query(FileAttachment("apl_communes (1)@3.csv"),{from:{table:"apl_communes (1)"},sort:[],slice:{to:null,from:null},types:[{name:"code_commune",type:"string"},{name:"annee",type:"string"}],filter:[],select:{columns:null}},invalidation)
)}

function _17(md){return(
md`## 1.3 Géométries des départements — IGN, Admin Express COG (version CARTO).
- Fichier local : departements.geojson
- Champs utilisés : code_dept (ou code_insee, remappé en code_dept)
- Rôle : fond cartographique pour la carte Héros.`
)}

function _departementsGeoJSON(FileAttachment){return(
FileAttachment("departements.geojson").json()
)}

function _19(md){return(
md`## 1.4 Population par âge (départements) — INSEE, structure par âge.
- Fichier local : donnees_departements.csv
- Champs utilisés : code_dept, pop_totale, pop_65plus → calcul pct65
- Rôle : contexte de vieillissement (axe Y du scatter).`
)}

function _demographie_dep11(__query,FileAttachment,invalidation){return(
__query(FileAttachment("demographie_dep (1)@1.csv"),{from:{table:"demographie_dep (1)"},sort:[],slice:{to:null,from:null},types:[{name:"code_dept",type:"string"}],filter:[],select:{columns:null}},invalidation)
)}

function _21(md){return(
md`_____`
)}

function _22(md){return(
md`# 2) Préparation des données `
)}

function _23(md){return(
md`## a) titleMark = f(…) — Titre injecté dans les graphiques`
)}

function _24(md){return(
md`_Petit utilitaire pour dessiner un titre en surimpression dans les charts (via marks: de Plot). Sert à afficher un libellé directement dans le cadre du graphique._`
)}

function _titleMark(Plot){return(
function titleMark(titre, size = 18) {
  return Plot.text([titre], {
    frameAnchor: "top-left",
    dx: 12,
    dy: 16, // descend un peu sous le bord haut
    fontSize: size,
    fontWeight: "bold"
  });
}
)}

function _26(md){return(
md`## b) apl_communes_raw = … — Données APL communes (brut)`
)}

function _27(md){return(
md`_Version brute du CSV des communes (toutes colonnes d’origine). Utile comme point de départ avant typage/nettoyage._`
)}

function _apl_communes_raw(FileAttachment){return(
FileAttachment("apl_communes (1)@3.csv").csv({ typed: true })
)}

function _29(md){return(
md`## c) apl_communes = … — Données APL communes (typées)`
)}

function _30(md){return(
md`Table nettoyée/typée : code_commune, annee, apl_total, code_dept. C’est la source de tous les agrégats APL (par dép. / par année).`
)}

async function _apl_communes(FileAttachment){return(
(
  await FileAttachment("apl_communes (1)@3.csv").csv({ typed: true })
)
  .map((d) => ({
    code_commune: String(d.code_commune).padStart(5, "0"),
    code_dept: String(
      d.code_dept ?? String(d.code_commune).slice(0, 2)
    ).padStart(2, "0"),
    annee: +d.annee,
    apl_total: +d.apl_total
  }))
  .filter(
    (d) => d.code_commune && d.code_dept && d.annee && !isNaN(d.apl_total)
  )
)}

function _32(md){return(
md`## d) derniere_annee_apl = 2023 — Année de référence`
)}

function _33(md){return(
md`_Dernière année disponible dans apl_communes. Sert à “geler” une photo actuelle (pour cartes et comparaisons)._`
)}

function _derniere_annee_apl(d3,apl_communes){return(
d3.max(apl_communes, (d) => d.annee)
)}

function _35(md){return(
md`## e) apl_dep = … — APL (médiane) par département`
)}

function _36(md){return(
md`_Agrégat départemental : { code_dept, apl_median } pour l’année de référence. Sert à la carte Héros, au scatter et à la fiche territoire._`
)}

function _apl_dep(d3,apl_communes,derniere_annee_apl){return(
d3
  .rollups(
    apl_communes.filter((d) => d.annee === derniere_annee_apl),
    (v) => d3.median(v, (d) => d.apl_total),
    (d) => d.code_dept
  )
  .map(([code_dept, apl_median]) => ({ code_dept, apl_median }))
)}

function _38(md){return(
md`## f) seuil_Q10 = 1.436 — Seuil national du pire décile`
)}

function _39(md){return(
md`Valeur limite du 10e décile (les 10% d’APL les plus basses). Sert à compter combien de communes d’un dép. sont dans la zone la plus en difficulté.`
)}

function _seuil_Q10(d3,apl_communes){return(
d3.quantile(
  apl_communes.map((d) => d.apl_total).sort(d3.ascending),
  0.1
)
)}

function _41(md){return(
md`## g) part_Q10 = … — Part de communes du dép. en pire décile`
)}

function _42(md){return(
md`Pour chaque département : proportion de communes avec apl_total ≤ seuil_Q10. Sert à la carte “étendue de la tension” (pas juste le niveau).`
)}

function _part_Q10(d3,apl_communes,seuil_Q10){return(
d3
  .rollups(
    apl_communes,
    (v) => {
      const n = v.length;
      const q10 = v.filter((d) => d.apl_total <= seuil_Q10).length;
      return q10 / Math.max(1, n);
    },
    (d) => d.code_dept
  )
  .map(([code_dept, part]) => ({ code_dept, part_Q10: part }))
)}

function _44(md){return(
md`## h) Aperçu — Démographie par département (INSEE)
Premières lignes du jeu **\`demographie_dep11\`** :  
- \`code_dept\` : code département  
- \`pop_totale\` : population totale  
- \`pop_65plus\` : population âgée de **65 ans et +**  
- \`pct65\` : part des 65+ (= \`pop_65plus / pop_totale\`)  

Cet aperçu sert de **référence** pour les visuels suivants (carte %65+, scatter “double vulnérabilité”, fiche territoire).
`
)}

function _45(Inputs,demographie_dep11){return(
Inputs.table(demographie_dep11, { rows: 10 })
)}

function _46(md){return(
md`## i) departementsData = … — Départements (GeoJSON “nu”)`
)}

function _47(md){return(
md`Géométries des départements sans indicateurs ajoutés. Sert de base avant d’enrichir pour les cartes (APL, Q10, etc.).`
)}

function _departementsData(departementsGeoJSON,demographie_dep11){return(
departementsGeoJSON.features.map((f) => {
  const code = String(
    f.properties.code_dept ??
      f.properties.code_insee ?? // parfois écrit ainsi dans Admin Express
      f.properties.code ??
      f.properties.insee ??
      f.properties.INSEE_DEP ??
      f.properties.insee_dep ??
      ""
  ).padStart(2, "0");

  const row = demographie_dep11.find(
    (r) => String(r.code_dept).padStart(2, "0") === code
  );

  return {
    ...f,
    properties: {
      ...f.properties,
      code_dept: code,
      pop_totale: row ? row.pop_totale : null,
      pop_65plus: row ? row.pop_65plus : null,
      pct65: row ? row.pct65 : null
    }
  };
})
)}

function _49(md){return(
md`## j) scatterDeps = … — Jeu de travail pour un scatter (aperçu)`
)}

function _50(md){return(
md`Préparation/essai d’un dataset pour nuage de points. Si tu traces un scatter final avec dv_dep, celui-ci peut rester comme aperçu/debug.`
)}

function _scatterDeps(demographie_dep11){return(
demographie_dep11
  .filter((d) => d.pop_totale && d.pct65 != null)
  .map((d) => ({
    code_dept: d.code_dept,
    pop_totale: d.pop_totale,
    pct65: d.pct65
  }))
)}

function _52(md){return(
md`## k) topAge = … — Top 10 % de 65 ans et +`
)}

function _53(md){return(
md`Classement des 10 départements les plus âgés, avec la population correspondante. Sert à un tableau/encadré de contexte si tu l’affiches.`
)}

function _topAge(demographie_dep11,d3){return(
[...demographie_dep11]
  .filter((d) => d.pct65 != null)
  .sort((a, b) => b.pct65 - a.pct65)
  .slice(0, 10)
  .map((d) => ({
    Département: d.code_dept,
    "Pct 65+": d3.format(".1%")(d.pct65),
    Population: d3.format(",")(d.pop_totale)
  }))
)}

function _55(md){return(
md`## l) Tableau — Départements les plus âgés (Top 10)
Classement des **10 départements** ayant la plus forte part de **65 ans et +** (\`Pct 65+\`), avec leur **population totale**.  
Ce tableau met en évidence les territoires où le **vieillissement** est le plus marqué — utile pour repérer des zones à risque de **double vulnérabilité** (si l’APL MG y est également faible).
`
)}

function _56(Inputs,topAge){return(
Inputs.table(topAge)
)}

function _57(md){return(
md`## m) moyennePct65 = … — Moyenne nationale du %65+`
)}

function _58(md){return(
md`Repère national (moyenne) de la part des 65 ans et +. Sert d’étalon dans tes textes ou éventuelles lignes de référence.`
)}

function _moyennePct65(d3,demographie_dep11){return(
d3.mean(
  demographie_dep11.filter((d) => d.pct65 != null),
  (d) => d.pct65
)
)}

function _60(md){return(
md`## n) departementsData_APL = … — GeoJSON + APL (carte Héros)`
)}

function _61(md){return(
md`Géométries des départements enrichies avec apl_median. Sert à remplir la carte Héros (plus foncé = APL plus bas = accès plus difficile).`
)}

function _departementsData_APL(departementsGeoJSON,apl_dep){return(
departementsGeoJSON.features.map((f) => {
  const code = String(
    f.properties.code_dept ?? f.properties.code_insee ?? f.properties.code ?? ""
  ).padStart(2, "0");
  const a = apl_dep.find((r) => r.code_dept === code);
  return {
    ...f,
    properties: {
      ...f.properties,
      code_dept: code,
      apl_median: a ? a.apl_median : null
    }
  };
})
)}

function _63(md){return(
md`## o) dv_dep = … — Jeu “double vulnérabilité” (pour le scatter)`
)}

function _64(md){return(
md`Pour chaque dép. : { code_dept, pct65, apl_median }, sans valeurs manquantes. Sert au nuage de points APL vs %65+.`
)}

function _dv_dep(demographie_dep11,apl_dep){return(
demographie_dep11
  .map((d) => {
    const a = apl_dep.find((x) => x.code_dept === d.code_dept);
    return {
      code_dept: d.code_dept,
      pct65: d.pct65,
      apl_median: a?.apl_median ?? null
    };
  })
  .filter((d) => d.pct65 != null && d.apl_median != null)
)}

function _66(md){return(
md`## p) departementsData_Q10 = … — GeoJSON + part_Q10 (carte étendue)`
)}

function _67(md){return(
md`Géométries des départements enrichies avec part_Q10. Sert à la carte de l’étendue (part des communes en pire décile APL).`
)}

function _departementsData_Q10(departementsGeoJSON,part_Q10){return(
departementsGeoJSON.features.map((f) => {
  const code = String(
    f.properties.code_dept ?? f.properties.code_insee ?? f.properties.code ?? ""
  ).padStart(2, "0");
  const q = part_Q10.find((r) => r.code_dept === code);
  return {
    ...f,
    properties: {
      ...f.properties,
      code_dept: code,
      part_Q10: q?.part_Q10 ?? null
    }
  };
})
)}

function _69(md){return(
md`## q) apl_dep_year = … — Séries APL par département (toutes années)`
)}

function _70(md){return(
md`Séries temporelles { code_dept, annee, apl } (souvent médiane par année). Sert à tracer l’évolution pour un département.`
)}

function _apl_dep_year(d3,apl_communes){return(
d3
  .rollups(
    apl_communes,
    (v) => d3.median(v, (d) => d.apl_total),
    (d) => d.code_dept,
    (d) => d.annee
  )
  .map(([code_dept, arr]) =>
    arr.map(([annee, apl]) => ({ code_dept, annee: +annee, apl }))
  )
  .flat()
  .sort((a, b) => a.annee - b.annee)
)}

function _72(md){return(
md`## r) apl_nat_year = … — Série APL France (par année)`
)}

function _73(md){return(
md`Moyenne (ou médiane) nationale de l’APL par année : { annee, apl }. Sert de courbe de référence face à la courbe du département.`
)}

function _apl_nat_year(d3,apl_dep_year){return(
d3
  .rollups(
    apl_dep_year,
    (v) => d3.mean(v, (d) => d.apl),
    (d) => d.annee
  )
  .map(([annee, apl]) => ({ annee: +annee, apl }))
  .sort((a, b) => a.annee - b.annee)
)}

function _75(md){return(
md`## s) median_pct65_FR = 0.246 — Médiane FR du %65+`
)}

function _76(md){return(
md`Repère médian France de la part des 65+ (différent de la moyenne). Sert aux badges “au-dessus / sous la médiane FR” dans la fiche.`
)}

function _median_pct65_FR(d3,demographie_dep11){return(
d3.median(demographie_dep11, (d) => d.pct65)
)}

function _78(md){return(
md`## t) median_apl_FR = 2.886 — Médiane FR de l’APL`
)}

function _79(md){return(
md`Repère médian France de l’APL départemental. Sert également à la fiche pour situer un département.`
)}

function _median_apl_FR(d3,apl_dep){return(
d3.median(apl_dep, (d) => d.apl_median)
)}

function _81(md){return(
md`## u) courbe_dep = … — Série APL du département sélectionné`
)}

function _82(md){return(
md`Filtre de apl_dep_year sur le département choisi (via ton sélecteur). Sert à la courbe d’évolution du département.
`
)}

function _courbe_dep(apl_dep_year,depCard){return(
apl_dep_year
  .filter((d) => d.code_dept === depCard)
  .sort((a, b) => a.annee - b.annee)
)}

function _84(md){return(
md`## v) rowDemo = … — Ligne “démographie” du dép. sélectionné`
)}

function _85(md){return(
md`Extrait de demographie_dep11 pour le dép. choisi : pop_totale, pop_65plus, pct65. Sert à la fiche territoire.`
)}

function _rowDemo(demographie_dep11,depCard){return(
demographie_dep11.find((d) => d.code_dept === depCard)
)}

function _87(md){return(
md`## w) rowApl = … — Ligne “APL” du dép. sélectionné`
)}

function _88(md){return(
md`Extrait de apl_dep pour le dép. choisi : apl_median. Sert aussi à la fiche territoire.`
)}

function _rowApl(apl_dep,depCard){return(
apl_dep.find((d) => d.code_dept === depCard)
)}

function _90(md){return(
md`## y) communesGeo = … — Communes (GeoJSON “nu”)`
)}

function _91(md){return(
md`Géométries des communes (sans indicateurs). Sert de fond pour la carte communale.`
)}

function _communesGeo(FileAttachment){return(
FileAttachment("communes.geojson").json()
)}

function _93(md){return(
md`## z) apl_communes_last = … — APL communes (année récente)`
)}

function _94(md){return(
md`Filtre de apl_communes sur derniere_annee_apl. Sert à lier l’APL actuelle aux géométries communales.`
)}

function _apl_communes_last(apl_communes,derniere_annee_apl){return(
apl_communes.filter((d) => d.annee === derniere_annee_apl)
)}

function _96(md){return(
md`## a2) communesAPL = … — GeoJSON communes + APL (carte fine)`
)}

function _97(md){return(
md`Communes enrichies avec apl_total pour l’année récente. Sert à la carte communale (loupe locale).`
)}

function _communesAPL(communesGeo,apl_communes_last){return(
communesGeo.features.map((f) => {
  const code = String(
    f.properties.code_commune ??
      f.properties.insee ??
      f.properties.INSEE_COM ??
      f.properties.code ??
      ""
  ).padStart(5, "0");
  const row = apl_communes_last.find((r) => r.code_commune === code);
  return {
    ...f,
    properties: { ...f.properties, apl_total: row ? row.apl_total : null }
  };
})
)}

function _99(md){return(
md`## b2) Aperçu debug — géométries des communes (Leaflet)
Contrôle visuel du fichier \`communes.geojson\`. À garder plié : les visuels de l'histoire utilisent les jeux enrichis (\`communesAPL\`) et/ou un filtre par département.
`
)}

function _communes1(FileAttachment){return(
FileAttachment("communes.geojson").json()
)}

function* _101(htl,L,communes1)
{
  const container = yield htl.html`<div style="height: 500px;">`;
  const map = L.map(container);
  const layer = L.geoJSON(communes1).addTo(map);
  map.fitBounds(layer.getBounds(), { maxZoom: 9 });
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      "© <a href=https://www.openstreetmap.org/copyright>OpenStreetMap</a> contributors"
  }).addTo(map);
}


function _102(md){return(
md`___`
)}

function _103(md){return(
md`** MG = médecins généralistes.**
- Dans nos textes, “APL MG” veut dire accessibilité potentielle localisée aux médecins généralistes
- donc l’indicateur d’accès au premier recours (les médecins de famille).`
)}

function _104(md){return(
md`___`
)}

function _105(md){return(
md`# 3) Visualisations (storytelling)`
)}

function _106(md){return(
md`## 3.1 Carte Héros — APL MG (départements)`
)}

function _107(md){return(
md`Cette carte montre l’APL MG par territoire. Plus la valeur est basse, plus l’accès théorique aux MG est difficile.
 Point d’attention. Les zones les plus sombres appartiennent au pire décile national (Q10).

`
)}

function _108(md){return(
md` APL MG (faible → accès difficile)

`
)}

function _109(md){return(
md`_ APL MG = indicateur qui combine proximité et disponibilité théorique des médecins généralistes. Ce n’est pas un temps d’attente, mais un proxy robuste pour comparer des territoires.
_
`
)}

function _110(Plot,departementsGeoJSON,departementsData_APL,d3,titleMark){return(
Plot.plot({
  width: 900,
  marginTop: 48,
  projection: { type: "mercator", domain: departementsGeoJSON },
  color: {
    type: "quantile",
    n: 7,
    label: "APL MG (médiane)\n(plus bas = accès plus difficile)"
  },
  marks: [
    Plot.geo(departementsData_APL, {
      fill: (d) => d.properties.apl_median,
      stroke: "#999",
      title: (d) => `${
        d.properties.nom ?? d.properties.name ?? d.properties.code_dept
      }
APL médiane : ${
        d.properties.apl_median == null
          ? "n.d."
          : d3.format(".2f")(d.properties.apl_median)
      }`
    }),
    titleMark("Carte Héros — APL MG (médiane par département)")
  ]
})
)}

function _111(Plot,olympians){return(
Plot.plot({
  marks: [
    Plot.rectY(olympians, Plot.binX({y: "count"}, {x: "weight"})),
    Plot.ruleY([0])
  ]
})
)}

function _112(md){return(
md`___`
)}

function _113(md){return(
md`## 3.2 Contexte — Part des 65 ans et plus`
)}

function _114(md){return(
md`### Est-ce que les territoires avec un accès MG faible sont aussi ceux où la population vieillit le plus ?

`
)}

function _115(md){return(
md`_ Si l’APL MG est basse et que la part des 65+ est élevée, on parle de double vulnérabilité.
_
`
)}

function _116(Plot){return(
Plot.legend({
  color: { type: "quantile", scheme: "blues", label: "% de 65 ans et +", n: 8 }
})
)}

function _117(Plot,departementsGeoJSON,departementsData,d3){return(
Plot.plot({
  width: 900,
  projection: { type: "mercator", domain: departementsGeoJSON },
  color: {
    type: "quantile",
    n: 8,
    scheme: "blues",
    label: "% de 65 ans et +",
    transform: (x) => (x == null ? null : Math.round(x * 1000) / 10) // pour un joli label (x10)
  },
  marks: [
    Plot.geo(departementsData, {
      fill: (d) => d.properties.pct65,
      stroke: "#999",
      title: (d) => `${
        d.properties.nom ?? d.properties.name ?? d.properties.code_dept
      }
% 65+ : ${
        d.properties.pct65 == null
          ? "n.d."
          : d3.format(".1%")(d.properties.pct65)
      }
Population : ${
        d.properties.pop_totale == null
          ? "n.d."
          : d3.format(",")(d.properties.pop_totale)
      }`
    }),
    Plot.geo(departementsGeoJSON, { stroke: "#666", strokeWidth: 0.5 }) // bordures au-dessus si besoin
  ]
})
)}

function _118(md){return(
md`____`
)}

function _119(md){return(
md`## 3.3 Accès MG vs vieillissement : où se cumulent les fragilités ?
`
)}

function _120(md){return(
md`### Double vulnérabilité (nuage de points)
`
)}

function _121(md){return(
md`Où l’accès est fragile ET la population vieillissante ?
Chaque point = un département.
– Bas (APL faible) = accès difficile.
– Haut (%65+ élevé) = population âgée.
Les points en bas-haut = double vulnérabilité → priorité d’action.`
)}

function _122(Plot,d3,dv_dep){return(
Plot.plot({
  width: 820,
  height: 500,
  x: { label: "APL MG (plus bas = accès difficile)", grid: true },
  y: { label: "% de 65 ans et +", grid: true, tickFormat: d3.format(".0%") },
  marks: [
    // Titre centré en haut
    Plot.text(["Nuage de points — Vieillissement vs taille (ou vs APL)"], {
      frameAnchor: "top",
      dy: -20,
      fontSize: 16,
      fontWeight: "bold",
      textAnchor: "middle"
    }),
    Plot.dot(dv_dep, {
      x: "apl_median",
      y: "pct65",
      r: 4,
      opacity: 0.85,
      title: (d) =>
        `Dept ${d.code_dept}\nAPL médiane : ${d3.format(".2f")(
          d.apl_median
        )}\n% 65+ : ${d3.format(".1%")(d.pct65)}`
    }),
    Plot.linearRegressionY(dv_dep, {
      x: "apl_median",
      y: "pct65",
      stroke: "black"
    })
  ]
})
)}

function _123(Plot,d3,scatterDeps){return(
Plot.plot({
  width: 1000,
  height: 900,
  marginLeft: 60,
  x: {
    label: "Population totale",
    grid: true,
    transform: (d) => d,
    tickFormat: d3.format(",")
  },
  y: { label: "% de 65 ans et +", grid: true, tickFormat: d3.format(".0%") },
  marks: [
    Plot.dot(scatterDeps, {
      x: "pop_totale",
      y: "pct65",
      r: (d) => Math.sqrt(d.pop_totale) / 300,
      fill: "#4e79a7",
      opacity: 0.7,
      title: (d) => `Dept ${d.code_dept}
% 65+ : ${d3.format(".1%")(d.pct65)}
Pop : ${d3.format(",")(d.pop_totale)}`
    })
  ]
})
)}

function _124(md){return(
md`___`
)}

function _125(md){return(
md`# Comprendre les mécanismes`
)}

function _126(md){return(
md`## Hypothèses à examiner`
)}

function _127(md){return(
md`1. Départs à la retraite des MG + moindre attractivité locale.
2. Éloignement des pôles de santé (temps d’accès routier).
3. Fragilités socio-éco (mobilité, équipement, isolement).`
)}

function _128(md){return(
md`Chaque territoire est spécifique : on cherche des signaux convergents, pas une cause unique.

`
)}

function _129(md){return(
md`___`
)}

function _130(md){return(
md`## 3.4 Étendue de la tension — part Q10`
)}

function _131(md){return(
md`Part des communes d’un département situées dans le pire décile APL MG national.
`
)}

function _132(md){return(
md`_Visualiser l’étendue de la difficulté d’accès MG (au-delà d’un seul indicateur médian).
_`
)}

function _133(md){return(
md`Étendue de la difficulté — part des communes en “pire décile” (Q10)
Ici, on regarde l’ampleur du problème : quelle part des communes d’un département se situe dans les 10% pires APL ?
Plus la part est élevée, plus la difficulté d’accès est étendue.`
)}

function _134(Plot,departementsGeoJSON,departementsData_Q10,d3,titleMark){return(
Plot.plot({
  width: 900,
  marginTop: 48,
  projection: { type: "mercator", domain: departementsGeoJSON },
  color: {
    type: "quantile",
    n: 7,
    scheme: "reds",
    label: "Part des communes en Q10 (APL MG)"
  },
  marks: [
    Plot.geo(departementsData_Q10, {
      fill: (d) => d.properties.part_Q10,
      stroke: "#999",
      title: (d) => `${
        d.properties.nom ?? d.properties.name ?? d.properties.code_dept
      }
Part Q10 : ${
        d.properties.part_Q10 == null
          ? "n.d."
          : d3.format(".0%")(d.properties.part_Q10)
      }`
    }),
    titleMark("Où la tension MG est la plus étendue — Part des communes en Q10")
  ]
})
)}

function _metrique(Inputs){return(
Inputs.select(
  [
    { id: "apl_median", label: "APL MG (médiane)" },
    { id: "part_Q10", label: "Part des communes en Q10" }
  ],
  { label: "Afficher :", format: (d) => d.label }
)
)}

function _136(metrique,departementsData_Q10,departementsData_APL,Plot,departementsGeoJSON,d3,titleMark)
{
  const isQ10 = metrique.id === "part_Q10";
  const data = isQ10 ? departementsData_Q10 : departementsData_APL;
  const fillA = isQ10
    ? (d) => d.properties.part_Q10
    : (d) => d.properties.apl_median;
  const label = isQ10
    ? "Part des communes en Q10 (APL MG)"
    : "APL MG (médiane)\n(plus bas = accès plus difficile)";
  const titre = isQ10
    ? "Où la tension MG est la plus étendue — Part des communes en Q10"
    : "Carte Héros — APL MG (médiane par département)";

  return Plot.plot({
    width: 900,
    marginTop: 48,
    projection: { type: "mercator", domain: departementsGeoJSON },
    color: {
      type: "quantile",
      n: 7,
      scheme: isQ10 ? "reds" : undefined, // neutre pour APL, rouges pour Q10
      label
    },
    marks: [
      Plot.geo(data, {
        fill: fillA,
        stroke: "#999",
        title: (d) => {
          const nom =
            d.properties.nom ?? d.properties.name ?? d.properties.code_dept;
          if (isQ10) {
            return `${nom}
Part Q10 : ${
              d.properties.part_Q10 == null
                ? "n.d."
                : d3.format(".0%")(d.properties.part_Q10)
            }`;
          } else {
            return `${nom}
APL médiane : ${
              d.properties.apl_median == null
                ? "n.d."
                : d3.format(".2f")(d.properties.apl_median)
            }`;
          }
        }
      }),
      titleMark(titre)
    ]
  });
}


function _137(md){return(
md`___`
)}

function _138(md){return(
md`## 3.5 Évolution de l’APL — département vs France, La pente qui inquiète : l’accès MG baisse quand l’âge monte
`
)}

function _139(md){return(
md`Évolution de l’APL MG (ou sa statistique départementale, ex. médiane) par département, comparée à la moyenne nationale.
 Story bit. “Ici, la pente descend tandis que la part des 65+ monte.”
`
)}

function _140(md){return(
md`Évolution de l’APL MG (département vs France)
Suivre la pente : si la courbe du département baisse (APL en recul), l’accès théorique devient plus difficile.
Comparer au profil national met en évidence les territoires qui décrochent.`
)}

function _141(Plot,d3,apl_nat_year,courbe_dep){return(
Plot.plot({
  width: 820,
  height: 420,
  x: { label: "Année", tickFormat: d3.format("d") },
  y: { label: "APL MG (médiane départementale)" },
  marks: [
    // France (ligne si ≥2 années, sinon point)
    (apl_nat_year?.length ?? 0) >= 2
      ? Plot.line(apl_nat_year, { x: "annee", y: "apl", stroke: "#aaa" })
      : Plot.dot(apl_nat_year, { x: "annee", y: "apl", r: 4, fill: "#aaa" }),

    // Département sélectionné (ligne si ≥2 années, sinon point)
    courbe_dep.length >= 2
      ? Plot.line(courbe_dep, { x: "annee", y: "apl", stroke: "#1f77b4" })
      : Plot.dot(courbe_dep, { x: "annee", y: "apl", r: 5, fill: "#1f77b4" })
  ].filter(Boolean)
})
)}

function _142(md){return(
md`____`
)}

function _143(md){return(
md`## 3.6 Fiche territoire — diagnostic express
`
)}

function _144(md){return(
md`Indicateurs.
- APL MG (niveau actuel)
- % 65 ans et +
`
)}

function _145(md){return(
md`Comparaison. Chaque indicateur est comparé à la médiane nationale.
 Phrase actionnable (modèle). “Priorité : consultations avancées 1 j/sem + renforts ciblés en premier recours (MG).”
`
)}

function _146(md){return(
md`Comparer au repère France
– Badge APL : ⬇️ sous médiane FR / ⬆️ au-dessus.
– Badge %65+ : ⬆️ au-dessus médiane FR / ⬇️ sous.
Diagnostic express : si APL < médiane FR et %65+ > médiane FR ⇒ double vulnérabilité → prioriser renforts MG.`
)}

function _depCard(Inputs,apl_dep_year){return(
Inputs.select(
  [...new Set(apl_dep_year.map((d) => d.code_dept))].sort(),
  { label: "Département", value: "75" }
)
)}

function _148(md,depCard,rowApl,d3,median_apl_FR,rowDemo,median_pct65_FR){return(
md`
### ${depCard} — Fiche territoire (MG)

- **APL MG (médiane)** : ${
  rowApl ? d3.format(".2f")(rowApl.apl_median) : "n.d."
}
  ${
    rowApl && rowApl.apl_median < median_apl_FR
      ? "⬇️ sous médiane FR"
      : "⬆️ au-dessus médiane FR"
  }

- **% 65 ans et +** : ${rowDemo ? d3.format(".1%")(rowDemo.pct65) : "n.d."}
  ${
    rowDemo && rowDemo.pct65 > median_pct65_FR
      ? "⬆️ au-dessus médiane FR"
      : "⬇️ sous médiane FR"
  }

**Lecture rapide :**
${
  rowApl && rowDemo
    ? rowApl.apl_median < median_apl_FR && rowDemo.pct65 > median_pct65_FR
      ? "⚠️ Double vulnérabilité probable : accès MG fragile + part âgée élevée → **prioriser renforts MG**."
      : "Situation intermédiaire — surveiller l’évolution."
    : "Données incomplètes."
}
`
)}

function _149(md){return(
md`_____`
)}

function _150(md){return(
md`## 3.7 Loupe locale — APL par commune (optionnel)`
)}

function _151(Plot,communesGeo,communesAPL,d3){return(
Plot.plot({
  width: 900,
  height: 600,
  projection: { type: "mercator", domain: communesGeo },
  color: {
    type: "quantile",
    n: 7,
    scheme: "blues",
    label: "APL MG (communes)\n(plus bas = accès plus difficile)"
  },
  marks: [
    Plot.geo(communesAPL, {
      fill: (d) => d.properties.apl_total,
      stroke: "#444",
      strokeWidth: 0.15,
      title: (d) =>
        `${d.properties.nom ?? ""}\nAPL : ${
          d.properties.apl_total == null
            ? "n.d."
            : d3.format(".2f")(d.properties.apl_total)
        }`
    })
  ]
})
)}

function _152(md){return(
md`____`
)}

function _153(md){return(
md`## 3.8 Comparatif 2022-2023`
)}

function _data_year(apl_tidy,anneeSel){return(
apl_tidy.filter((d) => d.annee === anneeSel)
)}

function _dep_median_year(d3,data_year){return(
d3
  .rollups(
    data_year,
    (v) => d3.median(v, (d) => d.apl),
    (d) => d.code_dept
  )
  .map(([code_dept, val]) => ({ code_dept, val }))
)}

function _departementsData_year(departementsGeoJSON,dep_median_year){return(
departementsGeoJSON.features.map((f) => {
  const code = String(
    f.properties.code_dept ?? f.properties.code_insee ?? f.properties.code ?? ""
  ).padStart(2, "0");
  const row = dep_median_year.find((d) => d.code_dept === code);
  return {
    ...f,
    properties: {
      ...f.properties,
      code_dept: code,
      apl_median: row ? row.val : null
    }
  };
})
)}

function _anneeSel(Inputs){return(
Inputs.select([2022, 2023], { label: "Année", value: 2023 })
)}

function _158(Plot,departementsGeoJSON,anneeSel,departementsData_year,d3){return(
Plot.plot({
  width: 900,
  projection: { type: "mercator", domain: departementsGeoJSON },
  color: {
    type: "quantile",
    n: 7,
    scheme: "blues",
    label: `APL MG (médiane) – ${anneeSel}`
  },
  marks: [
    Plot.geo(departementsData_year, {
      fill: (d) => d.properties.apl_median,
      stroke: "#999",
      title: (d) => `${
        d.properties.nom ?? d.properties.name ?? d.properties.code_dept
      }
APL médiane : ${
        d.properties.apl_median == null
          ? "n.d."
          : d3.format(".2f")(d.properties.apl_median)
      }`
    })
  ]
})
)}

function _159(md){return(
md`_____`
)}

function _160(md){return(
md`# Agir maintenant`
)}

function _161(md){return(
md`## Trois leviers locaux concrets (MG)
`
)}

function _162(md){return(
md`1. Renforts mobiles MG : consultations avancées, vacations tournantes, télé-expertise encadrée.
2. Incitations ciblées MG : MSP/maison de santé, terrains de stage, logement et mobilité pour internes/jeunes installés.
3. Transport à la demande santé : navettes vers pôles de soins pour communes Q10 isolées.`
)}

function _163(md){return(
md`_ De petites actions bien ciblées peuvent avoir un grand impact._`
)}

function _164(md){return(
md`____`
)}

function _165(md){return(
md`# Sources & crédits`
)}

function _166(md){return(
md`## Références`
)}

function _167(md){return(
md`- APL MG : indicateur d’accessibilité potentielle localisée (publication officielle).
- Population par âge : INSEE (recensement).
- Géométries : IGN — Admin Express COG (version CARTO).`
)}

function _168(md){return(
md`____`
)}

function _169(md){return(
md`# Synthèse`
)}

function _170(md){return(
md`- **Sources** : APL MG communes (2022–2023), géométries départements & communes, démographie INSEE.  
- **Préparation** : normalisation APL (\\\`apl_communes\\\`), agrégats par département (\\\`apl_dep\\\`), séries temporelles (\\\`apl_dep_year\\\`, \\\`apl_nat_year\\\`), repères nationaux, jeux enrichis pour cartes (\\\`departementsData_APL\\\`, \\\`departementsData_Q10\\\`).  
- **Visuels** :  
  1) Carte Héros APL (où l’accès est le plus fragile),  
  2) Scatter **APL vs %65+** (double vulnérabilité),  
  3) Top 10 %65+ (contexte),  
  4) Courbes (dép. vs FR),  
  5) Fiche territoire (diagnostic rapide),  
  6) (option) Loupe communale.  

**Idée directrice** : identifier les **territoires doublement vulnérables** (APL bas + %65+ élevé) et fournir une lecture **actionnable** à l’échelle départementale puis communale.\`


`
)}

function _171(md){return(
md`____`
)}

function _172(md){return(
md`# Conclusion — Cibler pour agir (MG)

- L’inégalité d’accès aux médecins généralistes **se joue à l’échelle fine** et **n’oppose pas simplement ville/campagne**.  
- En croisant **APL (faible)** et **vieillissement (%65+ élevé)**, on identifie les territoires **prioritaires**.  
- **Trois leviers** concrets :  
  1) **Renforts mobiles MG** : consultations avancées, vacations tournantes, télé-expertise encadrée.  
  2) **Incitations ciblées MG** : MSP/maisons de santé, stages, logement et mobilité pour internes/jeunes installés.  
  3) **Transport à la demande santé** : navettes vers pôles de soins pour communes isolées en pire décile.  

**Objectif** : concentrer les moyens là où l’impact sera **maximal** (territoires doublement vulnérables).\`
`
)}

function _173(md){return(
md`____`
)}

async function _174(FileAttachment,html)
{
  // --- asset
  const rightLogo = await FileAttachment("MMI_LOGO_BLACK.png").image();
  rightLogo.alt = "MMI Montbéliard";
  rightLogo.style.height = "84px";
  rightLogo.style.width = "auto";
  rightLogo.style.display = "block";

  // --- markup
  const el = html`
    <header class="hero hero--center">
      <div class="hero__tags">
        <span class="tag">SAE 303</span>
        <span class="tag tag--accent">Groupe 8</span>
      </div>

      <h1 class="hero__title">
        Santé & Territoires
        <span class="bar"></span>
      </h1>

      <p class="hero__strap">Là où l’âge avance plus vite que l’accès aux soins</p>

      <p class="hero__meta">
        <strong>Maëlie ADDARIO</strong> &middot; <strong>Mathis JUILLARD</strong>
        — MMI2 CRÉA&nbsp;1 — Octobre&nbsp;2025
      </p>

      <div class="hero__logo-tile">
        ${rightLogo}
      </div>
    </header>

    <style>
      /* === Palette (rouge → orange → jaune) === */
      :root{
        --bg:#ffffff;
        --card:#f8fafc;
        --ink:#0f172a;
        --muted:#475569;
        --line:#e2e8f0;
        --shadow:0 6px 24px rgba(2,6,23,.06);

        --accent:#ef4444;  /* red-500   */
        --accent2:#f59e0b; /* amber-500 */
        --accent3:#facc15; /* yellow-400 */
      }
      @media (prefers-color-scheme: dark){
        :root{
          --bg:#0b1020;
          --card:#11162a;
          --ink:#e2e8f0;
          --muted:#94a3b8;
          --line:#1e293b;
          --shadow:0 8px 28px rgba(0,0,0,.35);
        }
      }

      .hero{
        width:100%;
        max-width:980px;
        margin:0 auto;
        padding:22px 20px;
        border-radius:16px;
        background:var(--card);
        border:1px solid var(--line);
        box-shadow:var(--shadow);
      }

      .hero--center{
        display:flex;
        flex-direction:column;
        align-items:center;
        text-align:center;
        gap:10px;
      }

      .hero__tags{
        display:flex; gap:8px; flex-wrap:wrap; justify-content:center;
        margin-bottom:4px;
      }
      .tag{
        font:600 12px/1.2 ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto;
        padding:6px 10px; border-radius:999px;
        color:var(--ink);
        background:rgba(100,116,139,.12);
        border:1px solid var(--line);
      }
      .tag--accent{
        background:rgba(245,158,11,.18);
        border-color:rgba(245,158,11,.42);
      }

      .hero__title{
        margin:2px 0 2px;
        font:800 28px/1.15 ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto;
        color:var(--ink);
        position:relative;
        display:inline-block;
        padding-bottom:10px;
      }
      .hero__title .bar{
        position:absolute; left:0; right:0; bottom:0; height:4px; border-radius:999px;
        background:linear-gradient(90deg,var(--accent),var(--accent2),var(--accent3),var(--accent2),var(--accent));
        background-size:200% 100%;
        animation:flame 5s linear infinite;
        content:""; display:block;
      }
      @keyframes flame{ 0%{background-position:0% 50%} 100%{background-position:100% 50%} }

      .hero__strap{
        margin:0 0 2px 0;
        font:600 15px/1.45 ui-sans-serif,system-ui;
        color:var(--muted);
        max-width:780px;
      }

      .hero__meta{
        margin:0 0 8px 0;
        font:500 13px/1.5 ui-sans-serif,system-ui;
        color:var(--muted);
      }

      /* Tuile blanche centrée pour rendre le logo noir lisible aussi en dark mode */
      .hero__logo-tile{
        margin-top:6px;
        display:flex; align-items:center; justify-content:center;
        padding:12px 16px;
        border-radius:12px;
        background:#fff;
        border:1px solid var(--line);
        box-shadow: inset 0 1px 0 rgba(255,255,255,.4);
      }
      .hero__logo-tile img{ display:block; height:84px; width:auto; }

      @media (max-width:720px){
        .hero{ padding:18px 16px; }
        .hero__title{ font-size:24px; }
        .hero__logo-tile img{ height:72px; }
      }
    </style>
  `;

  return el;
}


export default function define(runtime, observer) {
  const main = runtime.module();
  function toString() { return this.url; }
  const fileAttachments = new Map([
    ["departements.geojson", {url: new URL("./files/7fd416c9a9000d36ae5f1f249384737092f455ba58a2e39b4d218afac309bf20ab439b7631274268ffa125054044344e14d6f2d727b52ce7d61858d1b256db79.geojson", import.meta.url), mimeType: "application/geo+json", toString}],
    ["demographie_dep (1)@1.csv", {url: new URL("./files/1b4b0b2b200f905e78ae06568030478cedd39a4fae6cf708d1678a73f4d3ad05789e0147979c8794260cfb0a85428488181a8d9a78d2ce24eb2c1a123f87bdef.csv", import.meta.url), mimeType: "text/csv", toString}],
    ["apl_communes (1)@3.csv", {url: new URL("./files/4f7f6cba280463cc650ae3c83f0120bcd068d6a8ba3ce77df19e91027e2699f95ee23c65e20dbf62eb4e8790d4586b4a9e367c2cbf2de3b7ca8795ad7f3a12b7.csv", import.meta.url), mimeType: "text/csv", toString}],
    ["communes.geojson", {url: new URL("./files/257d0f83cf0f018008946073dbb51b8e0bc5ebe91755a8081bc164c0ce2ff8e267c140643f4e805128f3015bd7f282b48876a010711ceda02c980f0e26cb23a6.geojson", import.meta.url), mimeType: "application/geo+json", toString}],
    ["apl_communes_2022_from_excel.csv", {url: new URL("./files/7d535c978a12784eafefa3ab33f2e002ccc7424c8545cd596216fb9c4c0db96ddf82fb6a56d9714ee0276a59abf6d51739c18a76b419e9fc9bcc3062f1d4f392.csv", import.meta.url), mimeType: "text/csv", toString}],
    ["MMI_LOGO_BLACK.png", {url: new URL("./files/9c318a1cc7cfea74160ee0e87d03df13f77d10b28221607b430ec9addd635c911532a64bb1862537f7cc8a33f1a06d7d77547e3433b03551f7a4f60da10290b7.png", import.meta.url), mimeType: "image/png", toString}]
  ]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], _1);
  main.variable(observer("viewof defi")).define("viewof defi", ["Inputs"], _defi);
  main.variable(observer("defi")).define("defi", ["Generators", "viewof defi"], (G, _) => G.input(_));
  main.variable(observer()).define(["html"], _3);
  main.variable(observer()).define(["md"], _4);
  main.variable(observer()).define(["md"], _5);
  main.variable(observer()).define(["md"], _6);
  main.variable(observer()).define(["md"], _7);
  main.variable(observer()).define(["md"], _8);
  main.variable(observer()).define(["md"], _9);
  main.variable(observer()).define(["md"], _10);
  main.variable(observer()).define(["md"], _11);
  main.variable(observer("apl_tidy")).define("apl_tidy", ["apl_2022","apl_communes13"], _apl_tidy);
  main.variable(observer("apl_2022")).define("apl_2022", ["__query","FileAttachment","invalidation"], _apl_2022);
  main.variable(observer()).define(["md"], _14);
  main.variable(observer("communes")).define("communes", ["FileAttachment"], _communes);
  main.variable(observer("apl_communes13")).define("apl_communes13", ["__query","FileAttachment","invalidation"], _apl_communes13);
  main.variable(observer()).define(["md"], _17);
  main.variable(observer("departementsGeoJSON")).define("departementsGeoJSON", ["FileAttachment"], _departementsGeoJSON);
  main.variable(observer()).define(["md"], _19);
  main.variable(observer("demographie_dep11")).define("demographie_dep11", ["__query","FileAttachment","invalidation"], _demographie_dep11);
  main.variable(observer()).define(["md"], _21);
  main.variable(observer()).define(["md"], _22);
  main.variable(observer()).define(["md"], _23);
  main.variable(observer()).define(["md"], _24);
  main.variable(observer("titleMark")).define("titleMark", ["Plot"], _titleMark);
  main.variable(observer()).define(["md"], _26);
  main.variable(observer()).define(["md"], _27);
  main.variable(observer("apl_communes_raw")).define("apl_communes_raw", ["FileAttachment"], _apl_communes_raw);
  main.variable(observer()).define(["md"], _29);
  main.variable(observer()).define(["md"], _30);
  main.variable(observer("apl_communes")).define("apl_communes", ["FileAttachment"], _apl_communes);
  main.variable(observer()).define(["md"], _32);
  main.variable(observer()).define(["md"], _33);
  main.variable(observer("derniere_annee_apl")).define("derniere_annee_apl", ["d3","apl_communes"], _derniere_annee_apl);
  main.variable(observer()).define(["md"], _35);
  main.variable(observer()).define(["md"], _36);
  main.variable(observer("apl_dep")).define("apl_dep", ["d3","apl_communes","derniere_annee_apl"], _apl_dep);
  main.variable(observer()).define(["md"], _38);
  main.variable(observer()).define(["md"], _39);
  main.variable(observer("seuil_Q10")).define("seuil_Q10", ["d3","apl_communes"], _seuil_Q10);
  main.variable(observer()).define(["md"], _41);
  main.variable(observer()).define(["md"], _42);
  main.variable(observer("part_Q10")).define("part_Q10", ["d3","apl_communes","seuil_Q10"], _part_Q10);
  main.variable(observer()).define(["md"], _44);
  main.variable(observer()).define(["Inputs","demographie_dep11"], _45);
  main.variable(observer()).define(["md"], _46);
  main.variable(observer()).define(["md"], _47);
  main.variable(observer("departementsData")).define("departementsData", ["departementsGeoJSON","demographie_dep11"], _departementsData);
  main.variable(observer()).define(["md"], _49);
  main.variable(observer()).define(["md"], _50);
  main.variable(observer("scatterDeps")).define("scatterDeps", ["demographie_dep11"], _scatterDeps);
  main.variable(observer()).define(["md"], _52);
  main.variable(observer()).define(["md"], _53);
  main.variable(observer("topAge")).define("topAge", ["demographie_dep11","d3"], _topAge);
  main.variable(observer()).define(["md"], _55);
  main.variable(observer()).define(["Inputs","topAge"], _56);
  main.variable(observer()).define(["md"], _57);
  main.variable(observer()).define(["md"], _58);
  main.variable(observer("moyennePct65")).define("moyennePct65", ["d3","demographie_dep11"], _moyennePct65);
  main.variable(observer()).define(["md"], _60);
  main.variable(observer()).define(["md"], _61);
  main.variable(observer("departementsData_APL")).define("departementsData_APL", ["departementsGeoJSON","apl_dep"], _departementsData_APL);
  main.variable(observer()).define(["md"], _63);
  main.variable(observer()).define(["md"], _64);
  main.variable(observer("dv_dep")).define("dv_dep", ["demographie_dep11","apl_dep"], _dv_dep);
  main.variable(observer()).define(["md"], _66);
  main.variable(observer()).define(["md"], _67);
  main.variable(observer("departementsData_Q10")).define("departementsData_Q10", ["departementsGeoJSON","part_Q10"], _departementsData_Q10);
  main.variable(observer()).define(["md"], _69);
  main.variable(observer()).define(["md"], _70);
  main.variable(observer("apl_dep_year")).define("apl_dep_year", ["d3","apl_communes"], _apl_dep_year);
  main.variable(observer()).define(["md"], _72);
  main.variable(observer()).define(["md"], _73);
  main.variable(observer("apl_nat_year")).define("apl_nat_year", ["d3","apl_dep_year"], _apl_nat_year);
  main.variable(observer()).define(["md"], _75);
  main.variable(observer()).define(["md"], _76);
  main.variable(observer("median_pct65_FR")).define("median_pct65_FR", ["d3","demographie_dep11"], _median_pct65_FR);
  main.variable(observer()).define(["md"], _78);
  main.variable(observer()).define(["md"], _79);
  main.variable(observer("median_apl_FR")).define("median_apl_FR", ["d3","apl_dep"], _median_apl_FR);
  main.variable(observer()).define(["md"], _81);
  main.variable(observer()).define(["md"], _82);
  main.variable(observer("courbe_dep")).define("courbe_dep", ["apl_dep_year","depCard"], _courbe_dep);
  main.variable(observer()).define(["md"], _84);
  main.variable(observer()).define(["md"], _85);
  main.variable(observer("rowDemo")).define("rowDemo", ["demographie_dep11","depCard"], _rowDemo);
  main.variable(observer()).define(["md"], _87);
  main.variable(observer()).define(["md"], _88);
  main.variable(observer("rowApl")).define("rowApl", ["apl_dep","depCard"], _rowApl);
  main.variable(observer()).define(["md"], _90);
  main.variable(observer()).define(["md"], _91);
  main.variable(observer("communesGeo")).define("communesGeo", ["FileAttachment"], _communesGeo);
  main.variable(observer()).define(["md"], _93);
  main.variable(observer()).define(["md"], _94);
  main.variable(observer("apl_communes_last")).define("apl_communes_last", ["apl_communes","derniere_annee_apl"], _apl_communes_last);
  main.variable(observer()).define(["md"], _96);
  main.variable(observer()).define(["md"], _97);
  main.variable(observer("communesAPL")).define("communesAPL", ["communesGeo","apl_communes_last"], _communesAPL);
  main.variable(observer()).define(["md"], _99);
  main.variable(observer("communes1")).define("communes1", ["FileAttachment"], _communes1);
  main.variable(observer()).define(["htl","L","communes1"], _101);
  main.variable(observer()).define(["md"], _102);
  main.variable(observer()).define(["md"], _103);
  main.variable(observer()).define(["md"], _104);
  main.variable(observer()).define(["md"], _105);
  main.variable(observer()).define(["md"], _106);
  main.variable(observer()).define(["md"], _107);
  main.variable(observer()).define(["md"], _108);
  main.variable(observer()).define(["md"], _109);
  main.variable(observer()).define(["Plot","departementsGeoJSON","departementsData_APL","d3","titleMark"], _110);
  main.variable(observer()).define(["Plot","olympians"], _111);
  main.variable(observer()).define(["md"], _112);
  main.variable(observer()).define(["md"], _113);
  main.variable(observer()).define(["md"], _114);
  main.variable(observer()).define(["md"], _115);
  main.variable(observer()).define(["Plot"], _116);
  main.variable(observer()).define(["Plot","departementsGeoJSON","departementsData","d3"], _117);
  main.variable(observer()).define(["md"], _118);
  main.variable(observer()).define(["md"], _119);
  main.variable(observer()).define(["md"], _120);
  main.variable(observer()).define(["md"], _121);
  main.variable(observer()).define(["Plot","d3","dv_dep"], _122);
  main.variable(observer()).define(["Plot","d3","scatterDeps"], _123);
  main.variable(observer()).define(["md"], _124);
  main.variable(observer()).define(["md"], _125);
  main.variable(observer()).define(["md"], _126);
  main.variable(observer()).define(["md"], _127);
  main.variable(observer()).define(["md"], _128);
  main.variable(observer()).define(["md"], _129);
  main.variable(observer()).define(["md"], _130);
  main.variable(observer()).define(["md"], _131);
  main.variable(observer()).define(["md"], _132);
  main.variable(observer()).define(["md"], _133);
  main.variable(observer()).define(["Plot","departementsGeoJSON","departementsData_Q10","d3","titleMark"], _134);
  main.variable(observer("viewof metrique")).define("viewof metrique", ["Inputs"], _metrique);
  main.variable(observer("metrique")).define("metrique", ["Generators", "viewof metrique"], (G, _) => G.input(_));
  main.variable(observer()).define(["metrique","departementsData_Q10","departementsData_APL","Plot","departementsGeoJSON","d3","titleMark"], _136);
  main.variable(observer()).define(["md"], _137);
  main.variable(observer()).define(["md"], _138);
  main.variable(observer()).define(["md"], _139);
  main.variable(observer()).define(["md"], _140);
  main.variable(observer()).define(["Plot","d3","apl_nat_year","courbe_dep"], _141);
  main.variable(observer()).define(["md"], _142);
  main.variable(observer()).define(["md"], _143);
  main.variable(observer()).define(["md"], _144);
  main.variable(observer()).define(["md"], _145);
  main.variable(observer()).define(["md"], _146);
  main.variable(observer("viewof depCard")).define("viewof depCard", ["Inputs","apl_dep_year"], _depCard);
  main.variable(observer("depCard")).define("depCard", ["Generators", "viewof depCard"], (G, _) => G.input(_));
  main.variable(observer()).define(["md","depCard","rowApl","d3","median_apl_FR","rowDemo","median_pct65_FR"], _148);
  main.variable(observer()).define(["md"], _149);
  main.variable(observer()).define(["md"], _150);
  main.variable(observer()).define(["Plot","communesGeo","communesAPL","d3"], _151);
  main.variable(observer()).define(["md"], _152);
  main.variable(observer()).define(["md"], _153);
  main.variable(observer("data_year")).define("data_year", ["apl_tidy","anneeSel"], _data_year);
  main.variable(observer("dep_median_year")).define("dep_median_year", ["d3","data_year"], _dep_median_year);
  main.variable(observer("departementsData_year")).define("departementsData_year", ["departementsGeoJSON","dep_median_year"], _departementsData_year);
  main.variable(observer("viewof anneeSel")).define("viewof anneeSel", ["Inputs"], _anneeSel);
  main.variable(observer("anneeSel")).define("anneeSel", ["Generators", "viewof anneeSel"], (G, _) => G.input(_));
  main.variable(observer()).define(["Plot","departementsGeoJSON","anneeSel","departementsData_year","d3"], _158);
  main.variable(observer()).define(["md"], _159);
  main.variable(observer()).define(["md"], _160);
  main.variable(observer()).define(["md"], _161);
  main.variable(observer()).define(["md"], _162);
  main.variable(observer()).define(["md"], _163);
  main.variable(observer()).define(["md"], _164);
  main.variable(observer()).define(["md"], _165);
  main.variable(observer()).define(["md"], _166);
  main.variable(observer()).define(["md"], _167);
  main.variable(observer()).define(["md"], _168);
  main.variable(observer()).define(["md"], _169);
  main.variable(observer()).define(["md"], _170);
  main.variable(observer()).define(["md"], _171);
  main.variable(observer()).define(["md"], _172);
  main.variable(observer()).define(["md"], _173);
  main.variable(observer()).define(["FileAttachment","html"], _174);
  return main;
}
