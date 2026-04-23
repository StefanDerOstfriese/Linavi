// Linavi data + rendering + mini translator (no frameworks)

const WORDS = [
  // Personen
  { w:"Ai", de:"ich", cat:"Personen" },
  { w:"ya", de:"du", cat:"Personen" },
  { w:"mii", de:"wir", cat:"Personen" },
  { w:"yii", de:"ihr", cat:"Personen" },
  { w:"eno", de:"er", cat:"Personen" },
  { w:"ena", de:"sie (Sing.)", cat:"Personen" },
  { w:"eni", de:"sie (Plural)", cat:"Personen" },
  { w:"pera", de:"person/mensch", cat:"Personen" },
  { w:"fena", de:"freund*in", cat:"Personen" },
  { w:"fama", de:"familie", cat:"Personen" },
  { w:"lena", de:"kind", cat:"Personen" },
  { w:"mama", de:"mutter", cat:"Personen" },
  { w:"papa", de:"vater", cat:"Personen" },
  { w:"pari", de:"partner*in", cat:"Personen" },
  { w:"tira", de:"team/gruppe", cat:"Personen" },

  // Chat
  { w:"yea", de:"ja/ok", cat:"Chat" },
  { w:"nai", de:"nein/nicht", cat:"Chat" },
  { w:"oka", de:"okay", cat:"Chat" },
  { w:"plii", de:"bitte", cat:"Chat" },
  { w:"dani", de:"danke", cat:"Chat" },
  { w:"gira", de:"gern/kein ding", cat:"Chat" },
  { w:"sori", de:"sorry", cat:"Chat" },
  { w:"mirei", de:"verzeihung / bitte entschuldige", cat:"Chat" },
  { w:"heii", de:"hallo/hi", cat:"Chat" },
  { w:"bai", de:"tschüss", cat:"Chat" },
  { w:"oyo", de:"oh/wow", cat:"Chat" },
  { w:"aha", de:"verstanden", cat:"Chat" },
  { w:"hmm", de:"unsicher/hm", cat:"Chat" },
  { w:"seo", de:"bitte wiederholen", cat:"Chat" },
  { w:"slo", de:"langsam", cat:"Chat" },
  { w:"redo", de:"nochmal", cat:"Chat" },
  { w:"pova", de:"passt/ist gut so", cat:"Chat" },
  { w:"riva", de:"egal", cat:"Chat" },
  { w:"hush", de:"leise/ruhig", cat:"Chat" },
  { w:"tudo", de:"dito", cat:"Chat" },

  // Fragewörter
  { w:"va", de:"wer", cat:"Fragewörter" },
  { w:"vo", de:"was", cat:"Fragewörter" },
  { w:"vi", de:"wo", cat:"Fragewörter" },
  { w:"vu", de:"wann", cat:"Fragewörter" },
  { w:"ve", de:"warum", cat:"Fragewörter" },
  { w:"vii", de:"wie", cat:"Fragewörter" },

  // Verknüpfer
  { w:"ani", de:"und", cat:"Verknüpfer" },
  { w:"ora", de:"oder", cat:"Verknüpfer" },
  { w:"buta", de:"aber", cat:"Verknüpfer" },
  { w:"kosa", de:"weil", cat:"Verknüpfer" },
  { w:"efi", de:"wenn", cat:"Verknüpfer" },

  // Zeit
  { w:"nu", de:"jetzt", cat:"Zeit" },
  { w:"gesi", de:"gestern", cat:"Zeit" },
  { w:"hodi", de:"heute", cat:"Zeit" },
  { w:"mora", de:"morgen (nächster Tag)", cat:"Zeit" },
  { w:"bali", de:"bald", cat:"Zeit" },
  { w:"sapa", de:"später", cat:"Zeit" },
  { w:"fora", de:"vorher", cat:"Zeit" },
  { w:"afa", de:"nachher", cat:"Zeit" },
  { w:"dai", de:"tag", cat:"Zeit" },
  { w:"wika", de:"woche", cat:"Zeit" },
  { w:"muna", de:"monat", cat:"Zeit" },
  { w:"yara", de:"jahr", cat:"Zeit" },
  { w:"mori", de:"morgen (Tageszeit)", cat:"Zeit" },
  { w:"noa", de:"mittag", cat:"Zeit" },
  { w:"evea", de:"abend", cat:"Zeit" },
  { w:"nita", de:"nacht", cat:"Zeit" },
  { w:"mina", de:"minute", cat:"Zeit" },
  { w:"hora", de:"stunde", cat:"Zeit" },
  { w:"tima", de:"zeit", cat:"Zeit" },
  { w:"pula", de:"plan/planung", cat:"Zeit" },

  // Ort
  { w:"hira", de:"hier", cat:"Ort" },
  { w:"dara", de:"dort", cat:"Ort" },
  { w:"huma", de:"zuhause", cat:"Ort" },
  { w:"loka", de:"ort/platz", cat:"Ort" },
  { w:"roma", de:"raum/zimmer", cat:"Ort" },
  { w:"ini", de:"in", cat:"Ort" },
  { w:"ina", de:"drin", cat:"Ort" },
  { w:"aura", de:"draußen", cat:"Ort" },
  { w:"via", de:"weg/route", cat:"Ort" },
  { w:"adra", de:"adresse", cat:"Ort" },
  { w:"neta", de:"internet", cat:"Ort" },
  { w:"telea", de:"telefon", cat:"Ort" },

  // Verben
  { w:"esi", de:"sein", cat:"Verben" },
  { w:"havi", de:"haben", cat:"Verben" },
  { w:"duri", de:"machen/tun", cat:"Verben" },
  { w:"gona", de:"gehen/fahren", cat:"Verben" },
  { w:"kumi", de:"kommen", cat:"Verben" },
  { w:"stai", de:"bleiben", cat:"Verben" },
  { w:"giva", de:"geben", cat:"Verben" },
  { w:"teya", de:"nehmen", cat:"Verben" },
  { w:"mira", de:"sehen/treffen", cat:"Verben" },
  { w:"saya", de:"sagen", cat:"Verben" },
  { w:"mema", de:"schreiben/chatten", cat:"Verben" },
  { w:"rila", de:"anrufen", cat:"Verben" },
  { w:"lisa", de:"hören", cat:"Verben" },
  { w:"navi", de:"wissen/kennen", cat:"Verben" },
  { w:"tina", de:"denken/glauben", cat:"Verben" },
  { w:"vila", de:"wollen", cat:"Verben" },
  { w:"nida", de:"brauchen", cat:"Verben" },
  { w:"lima", de:"mögen", cat:"Verben" },
  { w:"Luv", de:"lieben", cat:"Verben" },
  { w:"hela", de:"helfen", cat:"Verben" },
  { w:"tria", de:"versuchen", cat:"Verben" },
  { w:"vata", de:"warten", cat:"Verben" },
  { w:"stoa", de:"stoppen/aufhören", cat:"Verben" },
  { w:"suna", de:"anfangen", cat:"Verben" },
  { w:"fina", de:"fertig/enden", cat:"Verben" },
  { w:"paya", de:"bezahlen", cat:"Verben" },
  { w:"mola", de:"kaufen", cat:"Verben" },
  { w:"nami", de:"essen", cat:"Verben" },
  { w:"sipa", de:"trinken", cat:"Verben" },
  { w:"sela", de:"schlafen", cat:"Verben" },
  { w:"wora", de:"arbeit / arbeiten", cat:"Verben" },
  { w:"plia", de:"spielen", cat:"Verben" },

  // Qualität & Menge
  { w:"guti", de:"gut", cat:"Qualität" },
  { w:"badi", de:"schlecht", cat:"Qualität" },
  { w:"dol", de:"sehr/viel", cat:"Qualität" },
  { w:"liti", de:"wenig", cat:"Qualität" },
  { w:"meli", de:"mehr", cat:"Qualität" },
  { w:"lesi", de:"weniger", cat:"Qualität" },
  { w:"genu", de:"genug", cat:"Qualität" },
  { w:"so", de:"so", cat:"Qualität" },
  { w:"ala", de:"alles", cat:"Qualität" },
  { w:"soma", de:"etwas", cat:"Qualität" },
  { w:"nui", de:"neu", cat:"Qualität" },
  { w:"veta", de:"alt (nicht neu)", cat:"Qualität" },
  { w:"safi", de:"sicher", cat:"Qualität" },
  { w:"duno", de:"unsicher", cat:"Qualität" },
  { w:"klia", de:"klar/verständlich", cat:"Qualität" },
  { w:"nema", de:"vielleicht", cat:"Qualität" },
  { w:"fasi", de:"einfach", cat:"Qualität" },
  { w:"harda", de:"schwer/kompliziert", cat:"Qualität" },

  // Gefühle & Körper
  { w:"hapi", de:"glücklich", cat:"Gefühle" },
  { w:"glia", de:"froh", cat:"Gefühle" },
  { w:"sadi", de:"traurig", cat:"Gefühle" },
  { w:"madi", de:"wütend", cat:"Gefühle" },
  { w:"firi", de:"ängstlich", cat:"Gefühle" },
  { w:"cala", de:"ruhig", cat:"Gefühle" },
  { w:"tiri", de:"müde", cat:"Gefühle" },
  { w:"siki", de:"krank", cat:"Gefühle" },
  { w:"nora", de:"hunger", cat:"Gefühle" },
  { w:"sava", de:"durst", cat:"Gefühle" },
  { w:"kira", de:"kalt", cat:"Gefühle" },
  { w:"vara", de:"warm", cat:"Gefühle" },
  { w:"dola", de:"schmerz", cat:"Gefühle" },
  { w:"sena", de:"stress/druck", cat:"Gefühle" },

  // Alltag
  { w:"skola", de:"schule", cat:"Alltag" },
  { w:"busa", de:"bus", cat:"Alltag" },
  { w:"trena", de:"zug", cat:"Alltag" },
  { w:"karo", de:"auto", cat:"Alltag" },
  { w:"bika", de:"fahrrad", cat:"Alltag" },
  { w:"dora", de:"tür", cat:"Alltag" },
  { w:"bena", de:"bett", cat:"Alltag" },
  { w:"tava", de:"tisch", cat:"Alltag" },
  { w:"sila", de:"stuhl", cat:"Alltag" },
  { w:"luma", de:"licht/lampe", cat:"Alltag" },
  { w:"mona", de:"geld", cat:"Alltag" },
  { w:"paka", de:"paket", cat:"Alltag" },

  // Beziehung
  { w:"fida", de:"vertrauen", cat:"Beziehung" },
  { w:"kera", de:"streit", cat:"Beziehung" },
  { w:"pasa", de:"frieden/ok-sein", cat:"Beziehung" },
  { w:"bela", de:"grenze", cat:"Beziehung" },
  { w:"risa", de:"respekt", cat:"Beziehung" },
  { w:"kora", de:"schuld", cat:"Beziehung" },
  { w:"vera", de:"wahr", cat:"Beziehung" },
  { w:"fela", de:"falsch", cat:"Beziehung" },
  { w:"kema", de:"problem", cat:"Beziehung" },
  { w:"sola", de:"lösung", cat:"Beziehung" },
  { w:"kama", de:"erklärung", cat:"Beziehung" },
  { w:"nura", de:"wunsch", cat:"Beziehung" },
  { w:"pina", de:"versprechen", cat:"Beziehung" },
];

const PHRASES = [
  { sec:"Start & Ende", src:"heii ya.", de:"hi du." },
  { sec:"Start & Ende", src:"heii. ya oka?", de:"hi. alles ok?" },
  { sec:"Start & Ende", src:"Ai hapi mira ya.", de:"ich freue mich, dich zu sehen." },
  { sec:"Start & Ende", src:"bai.", de:"tschüss." },
  { sec:"Start & Ende", src:"bai bai.", de:"tschüss tschüss." },
  { sec:"Start & Ende", src:"Ai gona nu.", de:"ich gehe jetzt." },
  { sec:"Start & Ende", src:"Ai mema sapa.", de:"ich schreibe später." },
  { sec:"Start & Ende", src:"nita guti.", de:"gute nacht." },

  { sec:"Check-in", src:"Ai oka.", de:"mir geht’s ok." },
  { sec:"Check-in", src:"Ai guti.", de:"mir geht’s gut." },
  { sec:"Check-in", src:"Ai badi.", de:"mir geht’s schlecht." },
  { sec:"Check-in", src:"Ai tiri.", de:"ich bin müde." },
  { sec:"Check-in", src:"Ai siki.", de:"ich bin krank." },
  { sec:"Check-in", src:"Ai nora.", de:"ich habe hunger." },
  { sec:"Check-in", src:"Ai sava.", de:"ich habe durst." },
  { sec:"Check-in", src:"Ai cala.", de:"ich bin ruhig." },
  { sec:"Check-in", src:"Ai sadi.", de:"ich bin traurig." },
  { sec:"Check-in", src:"Ai madi.", de:"ich bin wütend." },

  { sec:"Liebe & Nähe", src:"Ai Luv ya.", de:"ich liebe dich." },
  { sec:"Liebe & Nähe", src:"Ai Luv ya dol.", de:"ich liebe dich sehr." },
  { sec:"Liebe & Nähe", src:"Ai Luv ya so dol.", de:"ich liebe dich so sehr." },
  { sec:"Liebe & Nähe", src:"Ai lima ya dol.", de:"ich mag dich sehr." },
  { sec:"Liebe & Nähe", src:"Ai vila stai hira ya.", de:"ich will bei dir bleiben." },
  { sec:"Liebe & Nähe", src:"ya guti pera.", de:"du bist ein guter mensch." },

  { sec:"Fragen & Verstehen", src:"vo dat?", de:"was ist das?" },
  { sec:"Fragen & Verstehen", src:"va dat?", de:"wer ist das?" },
  { sec:"Fragen & Verstehen", src:"vi ya nu?", de:"wo bist du jetzt?" },
  { sec:"Fragen & Verstehen", src:"vu mira?", de:"wann treffen?" },
  { sec:"Fragen & Verstehen", src:"ve?", de:"warum?" },
  { sec:"Fragen & Verstehen", src:"vii dat?", de:"wie meinst du das?" },
  { sec:"Fragen & Verstehen", src:"Ai nai navi.", de:"ich weiß nicht." },
  { sec:"Fragen & Verstehen", src:"Ai nai klia.", de:"ich verstehe es nicht klar." },
  { sec:"Fragen & Verstehen", src:"plii seo.", de:"bitte wiederholen." },
  { sec:"Fragen & Verstehen", src:"plii saya slo.", de:"bitte sag langsam." },

  { sec:"Planen & Treffen", src:"ya vila mira Ai hodi?", de:"willst du mich heute treffen?" },
  { sec:"Planen & Treffen", src:"ya vila mira Ai mora?", de:"willst du mich morgen treffen?" },
  { sec:"Planen & Treffen", src:"Ai vila mira ya hodi.", de:"ich will dich heute treffen." },
  { sec:"Planen & Treffen", src:"vu ya vila?", de:"wann willst du?" },
  { sec:"Planen & Treffen", src:"Ai vila nu.", de:"ich will jetzt." },
  { sec:"Planen & Treffen", src:"Ai vila sapa.", de:"ich will später." },
  { sec:"Planen & Treffen", src:"Ai kumi bali.", de:"ich komme bald." },
  { sec:"Planen & Treffen", src:"Ai kumi sapa.", de:"ich komme später." },
  { sec:"Planen & Treffen", src:"Ai stai huma hodi.", de:"ich bleibe heute zuhause." },
  { sec:"Planen & Treffen", src:"pula nu?", de:"plan jetzt? / wie ist der plan?" },

  { sec:"Absagen & Warten", src:"Ai nai kumi hodi.", de:"ich komme heute nicht." },
  { sec:"Absagen & Warten", src:"Ai nai vila mira hodi.", de:"ich will heute nicht treffen." },
  { sec:"Absagen & Warten", src:"Ai vila mira mora.", de:"ich will morgen treffen." },
  { sec:"Absagen & Warten", src:"vata plii.", de:"bitte warte." },
  { sec:"Absagen & Warten", src:"vata 5 mina plii.", de:"bitte warte 5 minuten." },
  { sec:"Absagen & Warten", src:"Ai fin wora, aft Ai kumi.", de:"nach der arbeit komme ich." },
  { sec:"Absagen & Warten", src:"Ai nai havi tima.", de:"ich habe keine zeit." },
  { sec:"Absagen & Warten", src:"Ai sori.", de:"es tut mir leid." },

  { sec:"Hilfe & Bedürfnisse", src:"ya hela Ai?", de:"hilfst du mir?" },
  { sec:"Hilfe & Bedürfnisse", src:"Ai nida hela.", de:"ich brauche hilfe." },
  { sec:"Hilfe & Bedürfnisse", src:"Ai nida tima.", de:"ich brauche zeit." },
  { sec:"Hilfe & Bedürfnisse", src:"Ai nida cala.", de:"ich brauche ruhe." },
  { sec:"Hilfe & Bedürfnisse", src:"plii stai hira.", de:"bitte bleib hier." },
  { sec:"Hilfe & Bedürfnisse", src:"plii stoa.", de:"bitte hör auf." },

  { sec:"Grenzen & Konflikt", src:"nai. Ai bela.", de:"nein. ich setze eine grenze." },
  { sec:"Grenzen & Konflikt", src:"Ai nai vila kera.", de:"ich will keinen streit." },
  { sec:"Grenzen & Konflikt", src:"Ai vila pasa.", de:"ich will frieden/ok sein." },
  { sec:"Grenzen & Konflikt", src:"ya lisa plii.", de:"bitte hör zu." },
  { sec:"Grenzen & Konflikt", src:"Ai saya klia: ...", de:"ich sage klar: ..." },
  { sec:"Grenzen & Konflikt", src:"Ai firi.", de:"ich habe angst." },
  { sec:"Grenzen & Konflikt", src:"mirei.", de:"verzeihung." },
  { sec:"Grenzen & Konflikt", src:"mirei. Ai sori.", de:"verzeihung. es tut mir leid." },
];

const STYLE_GUIDE_HTML = `
  <p class="muted">8 Regeln, damit Linavi konsistent und sehr einfach bleibt.</p>

  <div class="rule">
    <h2>1) Satzbau</h2>
    <p><strong>Subjekt – Verb – (Objekt) – (Zeit/Ort)</strong></p>
    <div class="code">Ai mema ya nu.\\nAi mira ya hodi hira.</div>
  </div>

  <div class="rule">
    <h2>2) Keine Fälle, keine Endungen</h2>
    <p><span class="w">Ai</span> bleibt immer <span class="w">Ai</span>, <span class="w">ya</span> bleibt immer <span class="w">ya</span>.</p>
    <div class="code">ya hela Ai?\\n(Ai gilt für: ich/mich/mir)</div>
  </div>

  <div class="rule">
    <h2>3) Negation mit nai</h2>
    <p><span class="w">nai</span> steht direkt vor dem verneinten Teil.</p>
    <div class="code">Ai nai kumi.\\nAi nai navi.\\nAi vila nai gona.</div>
  </div>

  <div class="rule">
    <h2>4) Zeit ohne Verbformen</h2>
    <p>Keine Konjugation. Nutze Zeitwörter:</p>
    <ul class="list">
      <li><span class="w">gesi</span> = gestern</li>
      <li><span class="w">hodi</span> = heute</li>
      <li><span class="w">mora</span> = morgen (nächster Tag)</li>
      <li><span class="w">nu</span> = jetzt, <span class="w">bali</span> = bald, <span class="w">sapa</span> = später</li>
    </ul>
    <div class="code">gesi Ai wora.\\nmora Ai mira ya.\\nAi kumi sapa.</div>
  </div>

  <div class="rule">
    <h2>5) Fragen</h2>
    <p>Entweder nur <strong>?</strong> oder Fragewort vorn.</p>
    <div class="code">ya oka?\\nAi kumi hodi?\\nvu ya kumi?\\nvi ya nu?</div>
  </div>

  <div class="rule">
    <h2>6) Intensität</h2>
    <p><span class="w">dol</span> verstärkt das Wort direkt davor. <span class="w">so dol</span> = „so sehr“.</p>
    <div class="code">Ai Luv ya dol.\\nAi Luv ya so dol.\\nAi hapi dol.</div>
  </div>

  <div class="rule">
    <h2>7) Klarheit & vielleicht</h2>
    <p><span class="w">klia</span> = klar/verständlich, <span class="w">nema</span> = vielleicht.</p>
    <div class="code">Ai nai klia. plii seo.\\nnema mora.</div>
  </div>

  <div class="rule">
    <h2>8) Höflichkeit kurz</h2>
    <p>Einwürfe reichen: <span class="w">plii</span>, <span class="w">dani</span>, <span class="w">gira</span>, <span class="w">sori</span>, <span class="w">mirei</span>.</p>
  </div>
`;

function uniq(arr){ return Array.from(new Set(arr)); }
function norm(s){ return (s ?? "").toString().toLowerCase().trim(); }

function copyText(text){
  if(!navigator.clipboard){
    const ta = document.createElement("textarea");
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    ta.remove();
    return;
  }
  navigator.clipboard.writeText(text);
}

function escapeHTML(s){
  return (s ?? "").toString()
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;")
    .replaceAll('"',"&quot;")
    .replaceAll("'","&#039;");
}
function escapeAttr(s){ return escapeHTML(s).replaceAll("\n"," "); }

// ---------- WORDS PAGE ----------
function initWords(){
  const tbody = document.getElementById("wordTbody");
  const search = document.getElementById("wordSearch");
  const catSel = document.getElementById("wordCategory");
  const stats = document.getElementById("wordStats");
  const btnCopy = document.getElementById("btnCopyWords");

  const cats = uniq(WORDS.map(x=>x.cat)).sort((a,b)=>a.localeCompare(b,"de"));
  for(const c of cats){
    const opt = document.createElement("option");
    opt.value = c;
    opt.textContent = c;
    catSel.appendChild(opt);
  }

  function render(){
    const q = norm(search.value);
    const cat = catSel.value;

    const filtered = WORDS.filter(x=>{
      const okCat = (cat === "all") || (x.cat === cat);
      const okQ = !q || norm(x.w).includes(q) || norm(x.de).includes(q) || norm(x.cat).includes(q);
      return okCat && okQ;
    }).sort((a,b)=>a.w.localeCompare(b.w,"de"));

    tbody.innerHTML = "";
    for(const it of filtered){
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td><span class="w">${escapeHTML(it.w)}</span></td>
        <td>${escapeHTML(it.de)}</td>
        <td>${escapeHTML(it.cat)}</td>
      `;
      tbody.appendChild(tr);
    }

    stats.textContent = `${filtered.length} / ${WORDS.length} Wörter angezeigt`;
  }

  btnCopy?.addEventListener("click", ()=>{
    const lines = WORDS
      .slice()
      .sort((a,b)=>a.w.localeCompare(b.w,"de"))
      .map(x=>`${x.w} = ${x.de} (${x.cat})`);
    copyText(lines.join("\n"));
    btnCopy.textContent = "Kopiert";
    setTimeout(()=>btnCopy.textContent="Liste kopieren", 900);
  });

  search.addEventListener("input", render);
  catSel.addEventListener("change", render);
  render();
}

// ---------- PHRASES PAGE ----------
function initPhrases(){
  const list = document.getElementById("phraseList");
  const search = document.getElementById("phraseSearch");
  const secSel = document.getElementById("phraseSection");
  const stats = document.getElementById("phraseStats");
  const btnCopy = document.getElementById("btnCopyPhrases");

  const secs = uniq(PHRASES.map(x=>x.sec)).sort((a,b)=>a.localeCompare(b,"de"));
  for(const s of secs){
    const opt = document.createElement("option");
    opt.value = s;
    opt.textContent = s;
    secSel.appendChild(opt);
  }

  function render(){
    const q = norm(search.value);
    const sec = secSel.value;

    const filtered = PHRASES.filter(x=>{
      const okSec = (sec === "all") || (x.sec === sec);
      const okQ = !q || norm(x.src).includes(q) || norm(x.de).includes(q) || norm(x.sec).includes(q);
      return okSec && okQ;
    });

    list.innerHTML = "";
    for(const p of filtered){
      const el = document.createElement("div");
      el.className = "phrase";
      el.innerHTML = `
        <div class="phrase__top">
          <div class="phrase__src">${escapeHTML(p.src)}</div>
          <div class="phrase__sec">${escapeHTML(p.sec)}</div>
        </div>
        <div class="phrase__gloss">${escapeHTML(p.de)}</div>
        <div class="phrase__actions">
          <button class="btn btn--ghost" data-copy="${escapeAttr(p.src)}">Linavi kopieren</button>
          <button class="btn btn--ghost" data-copy="${escapeAttr(p.de)}">DE kopieren</button>
        </div>
      `;
      list.appendChild(el);
    }

    list.querySelectorAll("button[data-copy]").forEach(btn=>{
      btn.addEventListener("click", ()=>{
        copyText(btn.getAttribute("data-copy"));
        const old = btn.textContent;
        btn.textContent = "Kopiert";
        setTimeout(()=>btn.textContent = old, 800);
      });
    });

    stats.textContent = `${filtered.length} / ${PHRASES.length} Phrasen angezeigt`;
  }

  btnCopy?.addEventListener("click", ()=>{
    const lines = PHRASES.map(x=>`[${x.sec}] ${x.src} — ${x.de}`);
    copyText(lines.join("\n"));
    btnCopy.textContent = "Kopiert";
    setTimeout(()=>btnCopy.textContent="Liste kopieren", 900);
  });

  search.addEventListener("input", render);
  secSel.addEventListener("change", render);
  render();
}

// ---------- STYLE PAGE ----------
function initStyle(){
  const box = document.getElementById("styleContent");
  const btn = document.getElementById("btnCopyStyle");
  box.innerHTML = STYLE_GUIDE_HTML;

  btn?.addEventListener("click", ()=>{
    const tmp = document.createElement("div");
    tmp.innerHTML = STYLE_GUIDE_HTML;
    const text = tmp.innerText.replace(/\n{3,}/g,"\n\n").trim();
    copyText(text);
    btn.textContent = "Kopiert";
    setTimeout(()=>btn.textContent="Text kopieren", 900);
  });
}

// ---------- TRANSLATE PAGE ----------
function normalizeGerman(s){
  return (s ?? "")
    .toString()
    .toLowerCase()
    .replace(/[“”„"]/g, '"')
    .replace(/[’‘]/g, "'")
    .replace(/[?.!,;:()]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function pickTimeWord(s){
  if(/\b(sofort|jetzt|gleich)\b/.test(s)) return "nu";
  if(/\bheute\b/.test(s)) return "hodi";
  if(/\bmorgen\b/.test(s)) return "mora";
  if(/\bgestern\b/.test(s)) return "gesi";
  if(/\bbald\b/.test(s)) return "bali";
  if(/\bspäter\b/.test(s)) return "sapa";
  return "";
}

function extractMinutes(s){
  const m = s.match(/\b(\d{1,3})\s*(minute|minuten|min)\b/);
  if(!m) return null;
  const n = parseInt(m[1], 10);
  return Number.isFinite(n) ? n : null;
}

function deToLinavi(input){
  const raw = (input ?? "").toString().trim();
  const s = normalizeGerman(raw);
  if(!s) return { out:"", notes:"" };

  const has = (re) => re.test(s);
  const timeWord = pickTimeWord(s);
  const minutes = extractMinutes(s);

  // Entschuldigung
  if(has(/\b(entschuldigung|verzeihung|pardon)\b/)){
    if(has(/\b(tut mir leid|sorry)\b/)) return { out:"mirei. Ai sori.", notes:"Erkannt: Verzeihung + sorry." };
    return { out:"mirei.", notes:"Erkannt: Verzeihung/Entschuldigung." };
  }
  if(has(/\b(tut mir leid|sorry)\b/)){
    return { out:"Ai sori.", notes:"Erkannt: sorry." };
  }

  // Ich liebe dich
  if(has(/\bich\b/) && has(/\b(liebe|lieb)\b/) && has(/\bdich\b/)){
    if(has(/\bso sehr\b/)) return { out:"Ai Luv ya so dol.", notes:"'so sehr' → so dol." };
    if(has(/\bsehr\b/)) return { out:"Ai Luv ya dol.", notes:"'sehr' → dol." };
    return { out:"Ai Luv ya.", notes:"" };
  }

  // Ich mag dich
  if(has(/\bich\b/) && has(/\bmag\b/) && has(/\bdich\b/)){
    if(has(/\bsehr\b/)) return { out:"Ai lima ya dol.", notes:"" };
    return { out:"Ai lima ya.", notes:"" };
  }

  // Ich weiß nicht
  if(has(/\bich\b/) && has(/\bweiß\b/) && has(/\bnicht\b/)){
    return { out:"Ai nai navi.", notes:"" };
  }

  // Ich habe (keine) Zeit
  if(has(/\bich\b/) && has(/\bhabe\b/) && has(/\bkeine\b/) && has(/\bzeit\b/)){
    return { out:"Ai nai havi tima.", notes:"" };
  }
  if(has(/\bich\b/) && has(/\bhabe\b/) && has(/\bzeit\b/) && !has(/\bkeine\b/)){
    return { out:"Ai havi tima.", notes:"" };
  }

  // Bitte warte (x Minuten)
  if(has(/\bbitte\b/) && has(/\bwarte(n)?\b/)){
    if(minutes != null) return { out:`vata ${minutes} mina plii.`, notes:"" };
    return { out:"vata plii.", notes:"" };
  }

  // Ich komme
  if(has(/\bich\b/) && has(/\bkomme\b/)){
    const neg = has(/\bnicht\b/);
    if(neg && timeWord) return { out:`Ai nai kumi ${timeWord}.`, notes:"" };
    if(neg) return { out:"Ai nai kumi.", notes:"" };
    if(timeWord) return { out:`Ai kumi ${timeWord}.`, notes:"" };
    return { out:"Ai kumi.", notes:"" };
  }

  // Ich gehe
  if(has(/\bich\b/) && has(/\bgehe\b/)){
    const neg = has(/\bnicht\b/);
    if(neg && timeWord) return { out:`Ai nai gona ${timeWord}.`, notes:"" };
    if(neg) return { out:"Ai nai gona.", notes:"" };
    if(timeWord) return { out:`Ai gona ${timeWord}.`, notes:"" };
    return { out:"Ai gona.", notes:"" };
  }

  // Ich bleibe zuhause
  if(has(/\bich\b/) && has(/\bbleibe\b/) && has(/\bzu(hause)?\b/)){
    if(timeWord) return { out:`Ai stai huma ${timeWord}.`, notes:"" };
    return { out:"Ai stai huma.", notes:"" };
  }

  // Wo bist du (jetzt)?
  if(has(/\bwo\b/) && has(/\bbist\b/) && has(/\bdu\b/)){
    if(has(/\bjetzt\b/)) return { out:"vi ya nu?", notes:"" };
    return { out:"vi ya?", notes:"Tipp: für 'jetzt' nutze 'nu' → 'vi ya nu?'" };
  }

  // Wann kommst du?
  if(has(/\bwann\b/) && has(/\bkommst\b/) && has(/\bdu\b/)){
    return { out:"vu ya kumi?", notes:"" };
  }

  // Wann treffen wir uns?
  if(has(/\bwann\b/) && (has(/\btreffen\b/) || has(/\bsehen\b/))){
    return { out:"vu mira?", notes:"" };
  }

  // Fallback
  const suggestions = [
    "Ai nai navi.",
    "plii seo.",
    "ya oka?",
    "Ai kumi sapa.",
    "vata plii."
  ];
  return {
    out: "—",
    notes: "Nicht erkannt (Mini‑Übersetzer). Vorschläge:\n" + suggestions.map(x=>"• "+x).join("\n")
  };
}

function initTranslate(){
  const inp = document.getElementById("deInput");
  const out = document.getElementById("aiOut");
  const notes = document.getElementById("aiNotes");
  const btnT = document.getElementById("btnTranslate");
  const btnC = document.getElementById("btnClear");
  const btnCopy = document.getElementById("btnCopyAi");

  function run(){
    const res = deToLinavi(inp.value);
    out.textContent = res.out || "";
    notes.textContent = res.notes || "";
  }

  btnT.addEventListener("click", run);
  inp.addEventListener("keydown", (e)=>{
    if((e.ctrlKey || e.metaKey) && e.key === "Enter") run();
  });

  btnC.addEventListener("click", ()=>{
    inp.value = "";
    out.textContent = "";
    notes.textContent = "";
    inp.focus();
  });

  btnCopy.addEventListener("click", ()=>{
    copyText(out.textContent || "");
    const old = btnCopy.textContent;
    btnCopy.textContent = "Kopiert";
    setTimeout(()=>btnCopy.textContent = old, 800);
  });

  run();
}

// ---------- BOOT ----------
document.addEventListener("DOMContentLoaded", ()=>{
  const page = window.LINAVI_PAGE;
  if(page === "words") initWords();
  if(page === "phrases") initPhrases();
  if(page === "style") initStyle();
  if(page === "translate") initTranslate();
});