/* ---------- Drive file arrays ---------- */
const grids = {
  featured: [
    ['1JYtrTZKKGAnU-3PPPFY4OZ7CHZf9q71m','Brand Launch & Media'],
    ['1auEj2JRNfLz-re9gZL0OGZEBoDITTJsP','OTT Acquisition Strategy'],
    ['1IFlwxSsT4JlMs9oY6rOr2-N8cOTBud6V','Digital & Brand Casebook'],
    ['1FxwA-EnEDpOwQvapBNlRZ9xiKA8EaAH9','E-commerce Growth Plan'],
    ['1oKgfbFH3h86mPOfKGNuc1VFtCr5eQUK6','Minimalist Launch'],
    ['19Z7k8zCFEKHfxMub4yLCK66g5nPqArHg','Dunzo AOV Lift']
  ],
  culture: [
    ['1YN8unVXQvkKYPvWhGG8uyXPXGMC2j1wd','RTC Consumer Study'],
    ['13UjWi84Hr44s4s_m6GYGlaLhbNyXnTtt','Sarees & Identity'],
    ['1abLSlqChU_udbrQpmkInTt-NfGCZxoJ9','Indian Comedy Semiotics'],
    ['1QevPMy7zLH0ikG95c5dhksUik9R5M3JO','Pop-Culture Deconstruction'],
    ['1cCB1g-9IRLe9XyrQ6mggPkqtBoyh_3HU','Moonchild Manifesto'],
    ['1z4D896Oqpvl245EyxSG1Tc2eMdB3tohM','Titan Youth Retail']
  ],
  d2c: [
    ['1dXy4YkxZ1FLUkR_qquguQ6HHbFKhLEvO','BigBasket Growth'],
    ['18nty5hdBJOPdEZKTV-WSkgo_nAC03CL6','Honey Basket Audit'],
    ['1Y8ofpvvvAw3g4qRQaFC-ljB_ow4q5SuN','GTM Strategy'],
    ['1rSyNzxYVcHKKiY6P3CefqShUNKEt_48t','Minimalist Campaign'],
    ['111PbD9RpBpLx4RFuZGgarptjko95l9RC','Gen Z Brand Analysis'],
    ['1Xq8AREwC3xf6WUs08MAmllyXSzkh75HE','Hamleys Insights'],
    ['1b9dK6m_5KiYybyHqsh3_UJ9na0Mh3RBd','Britannia Pricing']
  ],
  product: [
    ['1T-7olSfenJUWgnX9FcCWcZYpX4w7zw8x','Community Merch'],
    ['1aNzygAAPLL8u5FwficL0XBBb6Sh9DWbW','Sony LIV Plan'],
    ['1vphsoKdxhU2NXkT6qvgXisWdpFCSL-v-','SCAMPER Framework']
  ],
  saas: [
    ['1NL_Tkw2kA1KShjYEMqxNzRblsvNNB9gv','Hyundai WhatsApp CX'],
    ['1npR9kDzDE-YtzGFgz702TzoGTJymvKvJ','Chatbot GTM'],
    ['13q2Lb2yJ2KBcys1NM1y5yxAJ5-tgS6C-','Media Integration'],
    ['1JipRpFZqfB3RLD5HejDH-J_uUQFen0L9','Festive CRM'],
    ['1FhZyewK0JhJ3JxxJNxlVjFuLRpNXZnSL','Intl WhatsApp GTM'],
    ['1hmQt-aZ6TVdqnr32N2_rxGkUrroqjPSA','Data-Led Keynote'],
    ['1CsjduyNnohbgYXRaqQ8A0wB0TYmDLr-n','Sales Enablement'],
    ['1CDg819HDGhwkx2ugdUbSCZFbRNJh0mS5','Unified Martech Pitch'],
    ['1D5ugN0LjsIXEQ_1C0M7FkJoSduwOwx0a','Chatbot Use Cases']
  ]
};

/* ---------- build grids ---------- */
function buildCards(arr){
  return arr.map(([id,title])=>`
    <a class="project-card" href="https://drive.google.com/file/d/${id}/view" target="_blank">
      <div class="card-image" style="background-image:url('https://drive.google.com/thumbnail?id=${id}')"></div>
      <div class="card-content"><h3>${title}</h3></div>
    </a>`).join('');
}

document.querySelectorAll('[data-tab-content]').forEach(grid=>{
  const key = grid.dataset.tabContent;
  grid.innerHTML = buildCards(grids[key]||[]);
});

/* ---------- tab switching ---------- */
document.querySelectorAll('.tab').forEach(tab=>{
  tab.onclick = ()=>{
    document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
    tab.classList.add('active');
    const sel = tab.dataset.tab;
    document.querySelectorAll('[data-tab-content]').forEach(c=>{
      c.style.display = c.dataset.tabContent===sel?'grid':'none';
    });
  };
});

/* ---------- skill modal ---------- */
const blurbs = {
  'Growth Strategy':'Honed while scaling SaaS funnels at Netcore—5× ROAS & 15 % retention lift.',
  'Product Marketing':'Crafted GTM messaging for Fortune-500 deals at Netcore & Medtronic.',
  'Lifecycle Automation':'Built HubSpot journeys driving +15 % retention across 12 markets.',
  'Performance Ads':'Managed $350k in Meta & Google spend for 2.8–5.0 ROAS campaigns.',
  'HubSpot CRM':'Certified power-user; migrated 40k contacts for Medtronic GCC launch.',
  'SQL & GA4':'Weekly querying product + revenue data to surface new growth levers.'
};
const modal = document.getElementById('skillModal');
const ttl   = document.getElementById('skillTitle');
const body  = document.getElementById('skillBody');
document.querySelectorAll('.skill-badge').forEach(b=>{
  b.onclick=()=>{ttl.textContent=b.textContent.trim();body.textContent=blurbs[ttl.textContent]||'';modal.showModal();}
});
modal.querySelector('.close').onclick=()=>modal. Close();
