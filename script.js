(()=>{
const toggle=document.querySelector('.menu-toggle'),nav=document.querySelector('.nav');
function closeMenu(){if(!toggle||!nav)return;nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.textContent='Menu';}
if(toggle&&nav){toggle.addEventListener('click',()=>{const open=!nav.classList.contains('open');nav.classList.toggle('open',open);toggle.setAttribute('aria-expanded',String(open));toggle.textContent=open?'Close':'Menu';});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));document.addEventListener('keydown',e=>{if(e.key==='Escape' && !document.querySelector('.site-search-panel:not([hidden])')){const open=nav.classList.contains('open');closeMenu();if(open)toggle.focus();}});document.addEventListener('click',e=>{if(!e.target.closest('.site-header'))closeMenu();});}

const searchShell=document.querySelector('.site-search-shell'),searchToggle=searchShell?.querySelector('.site-search-toggle'),searchPanel=searchShell?.querySelector('.site-search-panel'),siteSearchField=searchPanel?.querySelector('input[type="search"]');
function setSiteSearchOpen(open){if(!searchShell||!searchToggle||!searchPanel)return;searchPanel.hidden=!open;searchToggle.setAttribute('aria-expanded',String(open));searchToggle.setAttribute('aria-label',open?'Close site search':'Open site search');if(open)siteSearchField?.focus();}
if(searchToggle&&searchPanel){searchToggle.addEventListener('click',()=>setSiteSearchOpen(searchPanel.hidden));document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!searchPanel.hidden){setSiteSearchOpen(false);searchToggle.focus();}});document.addEventListener('pointerdown',e=>{if(!searchShell.contains(e.target)&&!searchPanel.hidden)setSiteSearchOpen(false);});}

const buttons=[...document.querySelectorAll('.filter-btn')],papers=[...document.querySelectorAll('.paper')],search=document.querySelector('#paper-search'),count=document.querySelector('#result-count'),empty=document.querySelector('#no-results');let year='all';
function filter(){const query=(search?.value||'').trim().toLocaleLowerCase();let shown=0;papers.forEach(p=>{const show=(year==='all'||p.dataset.year===year)&&p.textContent.toLocaleLowerCase().includes(query);p.hidden=!show;if(show)shown++;});if(count)count.textContent=shown+' of '+papers.length+' publications';if(empty)empty.hidden=shown!==0;}
buttons.forEach(b=>b.addEventListener('click',()=>{year=b.dataset.year;buttons.forEach(x=>x.setAttribute('aria-pressed',String(x===b)));filter();}));if(search)search.addEventListener('input',filter);if(papers.length)filter();

/* Sticky headers are unreliable fragment targets: scroll to the document's actual top. */
document.querySelectorAll('a[href="#top"]').forEach(anchor=>{
 anchor.addEventListener('click',event=>{
   event.preventDefault();
   const reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
   window.scrollTo({top:0,left:0,behavior:reduce?'auto':'smooth'});
 });
});

const y=document.querySelector('#copyright-year');if(y)y.textContent=new Date().getFullYear();
if(location.pathname==='/'||location.pathname.endsWith('/index.html')){const legacy={about:'about.html',research:'research.html',publications:'publications.html',projects:'research.html#directions',academic:'experience.html',contact:'contact.html'};const target=legacy[location.hash.slice(1)];if(target)location.replace(target);}
})();