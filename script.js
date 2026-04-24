const data = [
    { id: 1, p: "qǐng kāiqǐ qián zhàodēng", e: "Turn on headlights", c: "on", a: "1_qing_kaiqi_qian_zhaodeng.mp3" },
    { id: 2, p: "Yèjiān zhíxíng tōngguò lùkǒu", e: "Go straight through intersection (Night)", c: "on", a: "2_yejian_zhixing_tongguo_lukou.mp3" },
    { id: 3, p: "Yǔ jidòngchē huìchē", e: "Meeting motor vehicle", c: "on", a: "2_yu_jidongche_huiche.mp3" },
    { id: 4, p: "Yèjiān yǔ jidòngchē huìchē", e: "Meeting motor vehicle (Night)", c: "on", a: "3_yejian_yu_jidongche_huiche.mp3" },
    { id: 5, p: "Tóng fāngxiàng jǐnjùlí gēnchē xíngshǐ", e: "Following closely (Night)", c: "on", a: "5_yejian_tong_fangxiang_jinjuli_genche_xingshi.mp3" },
    { id: 6, p: "Tóng fāngxiàng jǐnjùlí genche xíngshǐ (Day)", e: "Following closely", c: "on", a: "6_tong_fangxiang_jinjuli_genche_xingshi.mp3" },
    { id: 7, p: "Yèjiān zài zhàomíng liánghǎo de dàolù shàng xíngshǐ", e: "Well-lit road (Night)", c: "on", a: "7_yejian_zai_zhaoming_lianghao_de_daolu_shang_xingshi.mp3" },
    { id: 8, p: "Zài zhàomíng liánghǎo de dàolù shàng xíngshǐ", e: "Well-lit road", c: "on", a: "8_zai_zhaoming_lianghao_de_daolu_shang_xingshi.mp3" },
    { id: 9, p: "Yèjiān zài zhàiqiáo yǔ fēijidòngchē huìchē", e: "Meeting non-motor vehicle on narrow bridge", c: "on", a: "9_yejian_zai_zhaiqiao_yu_feijidongche_huiche.mp3" },
    { id: 10, p: "Yèjiān zài méiyǒu lùdēng zhaomíng bùliáng...", e: "No road lights / Poor visibility", c: "high", a: "10_yejian_zai_meiyou_ludeng_zhaoming_buliang_tiaojian_xia_xingshi.mp3" },
    { id: 11, p: "Yèjiān zài méiyǒu lùdēng (ALT)", e: "No road lights (Alternative)", c: "high", a: "11_yejian_zai_meiyou_ludeng_zhaoming_buliang_tiaojian_xia_xingshi_alt.mp3" },
    { id: 12, p: "Tōngguò méiyǒu jiāotōng xìnhàodēng kòngzhì de lùkǒu", e: "No traffic lights", c: "flash", a: "12_tongguo_meiyou_jiaotong_xinhaodeng_kongzhi_de_lukou.mp3" },
    { id: 13, p: "Yèjiān tōngguò méiyǒu jiāotōng xìnhàodēng...", e: "No traffic lights (Night)", c: "flash", a: "12_yejian_tongguo_meiyou_jiaotong_xinhaodeng_kongzhi_de_lukou_1.mp3" },
    { id: 14, p: "Yèjiān chāoyuè qiánfāng chēliàng", e: "Overtaking at night", c: "flash", a: "14_yejian_chaoyue_qianfang_cheliang.mp3" },
    { id: 15, p: "Chāochē", e: "Overtaking", c: "flash", a: "15_chaoche.mp3" },
    { id: 16, p: "Yèjiān tōngguò pòlù gǒngqiáo", e: "Slopes and hump bridges (Night)", c: "flash", a: "16_yejian_tongguo_polu_gongqiao.mp3" },
    { id: 17, p: "Tōngguò pòlù", e: "Passing slopes", c: "flash", a: "17_tongguo_polu.mp3" },
    { id: 18, p: "Tōngguò gǒngqiáo", e: "Passing hump bridge", c: "flash", a: "18_tongguo_gongqiao.mp3" },
    { id: 19, p: "Yèjiān tōngguò jíwān gǒngqiáo", e: "Sharp curves and hump bridges (Night)", c: "flash", a: "19_yejian_tongguo_jiwan_gongqiao.mp3" },
    { id: 20, p: "Tōngguò jíwān", e: "Passing sharp curves", c: "flash", a: "20_tongguo_jiwan.mp3" },
    { id: 21, p: "Lùbiān línshí tíngchē", e: "Temporary roadside parking", c: "park_haz", a: "21_lubian_linshi_tingche.mp3" },
    { id: 22, p: "Lùbiān línshí tíngchē (ALT)", e: "Roadside parking (Alternative)", c: "park_haz", a: "22_lubian_linshi_tingche_alt.mp3" },
    { id: 23, p: "Yèjiān dàolù fāshēng gùzhàng...", e: "Vehicle breakdown / Accident", c: "park_haz", a: "23_yejian_zai_daolu_shang_fasheng_guzhang_huo_jiaotong_shigu_fangai_jiaotong_you_nanyi_yidong.mp3" },
    { id: 24, p: "Zài jiāotōng xìnhàodēng kongzhì lùkǒu zhíxíng", e: "Traffic light intersection (Straight)", c: "on", a: "24_zai_jiaotong_xinhaodeng_kongzhi_lukou_zhixing.mp3" },
    { id: 25, p: "Zài wú zhàomíng de dàolù shàng xíngshǐ", e: "Driving on unlit roads", c: "high", a: "25_zai_wu_zhaoming_de_daolu_shang_xingshi.mp3" },
    { id: 26, p: "Tōngguò rénxíng héngdào", e: "Pedestrian crossing", c: "flash", a: "26_tongguo_renxing_hengdao.mp3" },
    { id: 27, p: "Mǒnǐ yèjiān kǎoshì wánchéng...", e: "Test complete: Turn off all lights", c: "off", a: "27_moni_yejian_kaoshi_wancheng_qing_guanbi_suoyou_dengguang.mp3" }
];

let queue = [], retry = [], current = null, timer = null, timeLeft = 500, locked = true;
let dialState = "off", isHigh = false, isHaz = false, currentAudio = null;
let flashCount = 0; 

function toggleText(id, btn) {
    const textEl = document.getElementById(id);
    textEl.classList.toggle('reveal');
    if (btn) btn.classList.toggle('active');
}

function renderDashboard() {
    const root = document.getElementById('dashboard-root');
    root.innerHTML = `
        <div id="controls">
            <div class="dial-wrapper">
                <div id="hint-off" class="btn-round p-off" onclick="uiInput('off')">OFF</div>
                <div id="hint-park" class="btn-round p-park" onclick="uiInput('park')">PARK</div>
                <div id="hint-on" class="btn-round p-low" onclick="uiInput('on')">LOW</div>
                <div class="knob-base"><div id="knob" style="transform: rotate(-45deg);"></div></div>
            </div>
            <div class="stack">
                <button id="hint-flash" class="btn-rect" style="background:#eee; color:#111" onmousedown="uiInput('flash')">FLASH 2X</button>
                <button id="btn-high" class="btn-rect b-high" onclick="uiInput('high')">HIGH BEAMS</button>
                <button id="btn-haz" class="btn-rect b-haz" onclick="uiInput('hazard')">HAZARDS</button>
            </div>
        </div>
    `;
}

function initGame() {
    renderDashboard();
    document.getElementById('start-screen').style.display = 'none';
    const log = document.getElementById('audit-log');
    log.innerHTML = "";
    data.forEach(d => log.innerHTML += `<div id="log-${d.id}" class="audit-item"><span>#${d.id}</span><span id="res-${d.id}">--</span></div>`);
    
    const start = data[0];
    const end = data[data.length-1];
    const mid = data.slice(1, -1).sort(() => Math.random() - 0.5);
    queue = [start, ...mid, end];
    runNext();
}

function runNext() {
    clearHints();
    resetSwitches();
    
    if (queue.length === 0 && retry.length === 0) { 
        document.getElementById('pass-banner').style.display = "block";
        return; 
    }
    if (queue.length === 0) { queue = [...retry]; retry = []; }
    current = queue.shift();
    locked = true;
    
    const statusEl = document.getElementById('status-msg');
    if (statusEl) {
        statusEl.innerText = "";
        statusEl.style.color = "#00C851"; 
    }
    
    document.getElementById('pinyin').innerText = current.p;
    document.getElementById('english').innerText = current.e;
    
    document.querySelectorAll('.audit-item').forEach(i => i.classList.remove('active-q'));
    document.getElementById(`log-${current.id}`).classList.add('active-q');

    if (currentAudio) { currentAudio.pause(); currentAudio = null; }
    currentAudio = new Audio(`audio/${current.a}`);
    
    setTimeout(() => {
        currentAudio.play().then(() => {
            currentAudio.onended = () => { unlock(); };
        }).catch(() => { unlock(); });
    }, 300); 
}

function unlock() { locked = false; startTimer(); }

function startTimer() {
    if (timer) clearInterval(timer);
    timeLeft = 500;
    timer = setInterval(() => {
        timeLeft -= 5;
        document.getElementById('timer-bar').style.width = (timeLeft/500 * 100) + "%";
        if (timeLeft <= 0) { triggerFail(); }
    }, 50);
}

function uiInput(type) {
    if (locked) return;
    
    // --- DIAL GLOW LOGIC ---
    if (["off", "park", "on"].includes(type)) {
        dialState = type;
        document.getElementById('knob').style.transform = `rotate(${type==="off"?-45:(type==="park"?0:45)}deg)`;
        
        ['hint-off', 'hint-park', 'hint-on'].forEach(id => {
            const el = document.getElementById(id);
            if(el) el.classList.remove('active-dial', 'correct-glow');
        });

        // Set Persistent Colors
        if (type === 'park') document.getElementById('hint-park').classList.add('active-dial'); // Orange
        if (type === 'on') document.getElementById('hint-on').classList.add('active-dial');     // Yellow
    }

    const flashBtn = document.getElementById('hint-flash');
    if (type === 'flash') {
        flashCount++;
        if (flashCount === 1) {
            flashBtn.classList.add('flash-primed');
            return; 
        } else if (flashCount >= 2) {
            flashBtn.classList.remove('flash-primed');
            flashBtn.classList.add('flash-success');
        }
    } else {
        flashCount = 0;
        if (flashBtn) {
            flashBtn.classList.remove('flash-primed', 'flash-success');
        }
    }

    if (type === "high") { 
        isHigh = !isHigh; 
        document.getElementById('btn-high').classList.toggle('on', isHigh); 
    }
    if (type === "hazard") { 
        isHaz = !isHaz; 
        const hb = document.getElementById('btn-haz');
        if (hb) hb.classList.toggle('haz-on', isHaz); 
    }
    
    check(type);
}

function check(lastInput) {
    let ok = false;
    let failNow = false;

    if (current.c === "park_haz") {
        if (dialState === "park" && isHaz) {
            ok = true;
            document.getElementById('hint-park').classList.add('correct-glow'); // Turn Green
        }
        if (lastInput === "high" || lastInput === "flash") failNow = true;
    }
    else if (current.c === "high") {
        if (dialState === "on" && isHigh) {
            ok = true;
            document.getElementById('hint-on').classList.add('correct-glow'); // Turn Green
        }
        // FIX: Ignore 'on' so user can switch dial back from PARK without failing
        if (lastInput === "hazard" || lastInput === "flash" || (lastInput === "park" && dialState === "park")) failNow = true;
    }
    else if (current.c === "flash") {
        if (lastInput === "flash" && flashCount >= 2) ok = true;
        // FIX: Ignore 'on' so user can switch dial back from PARK without failing
        else if (lastInput !== "flash" && lastInput !== "on") failNow = true;
    }
    else if (current.c === "on") {
        if (dialState === "on" && !isHigh && !isHaz) {
            ok = true;
            document.getElementById('hint-on').classList.add('correct-glow'); // Turn Green
        }
        if (isHigh || isHaz || dialState === "park" || dialState === "off") failNow = true;
    }
    else if (current.c === "off") {
        if (dialState === "off" && !isHigh && !isHaz) ok = true;
        if (dialState !== "off" || isHigh || isHaz) failNow = true;
    }

    if (failNow && !ok) { 
        triggerFail(); 
        return; 
    }

    if (ok) {
        clearInterval(timer);
        locked = true;
        const statusEl = document.getElementById('status-msg');
        if (statusEl) {
            statusEl.innerText = "✓ CORRECT";
            statusEl.style.color = "#00C851"; 
        }
        document.getElementById(`res-${current.id}`).innerText = "PASS";
        document.getElementById(`res-${current.id}`).className = "pass-q";
        setTimeout(runNext, 1000);
    }
}

function triggerFail() {
    clearInterval(timer);
    locked = true;
    retry.push(current);
    document.getElementById(`res-${current.id}`).innerText = "FAIL";
    document.getElementById(`res-${current.id}`).className = "fail-q";
    
    showHint();
    document.getElementById('fail-banner').style.display = "block";
}

function showHint() {
    const map = { "on": "hint-on", "off": "hint-off", "park_haz": "btn-haz", "high": "btn-high", "flash": "hint-flash" };
    const el = document.getElementById(map[current.c]);
    if (el) el.classList.add('hint-pulse');

    if (current.c === "park_haz") {
        document.getElementById('hint-park').classList.add('pulse-dial');
    } else if (current.c === "high" || current.c === "on") {
        document.getElementById('hint-on').classList.add('pulse-dial');
    } else if (current.c === "off") {
        document.getElementById('hint-off').classList.add('pulse-dial');
    }
}

function clearHints() {
    document.querySelectorAll('.hint-pulse').forEach(e => e.classList.remove('hint-pulse'));
    document.querySelectorAll('.pulse-dial').forEach(e => e.classList.remove('pulse-dial'));
}

function resetSwitches() {
    isHigh = false; 
    const hb = document.getElementById('btn-high');
    if(hb) hb.classList.remove('on');
    
    isHaz = false; 
    const hz = document.getElementById('btn-haz');
    if(hz) hz.classList.remove('haz-on');

    flashCount = 0;
    const fb = document.getElementById('hint-flash');
    if(fb) {
        fb.classList.remove('flash-primed', 'flash-success');
    }
}

function closeAlert() {
    document.getElementById('fail-banner').style.display = "none";
    runNext();
}
