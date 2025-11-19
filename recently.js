// recently.js — Sidebar Button + Sliding Drawer (No changes to original code)

(function () {

    document.addEventListener("DOMContentLoaded", initRecently);

    let maxItems = 12;

    function $(s){ return document.querySelector(s); }
    function $all(s){ return Array.from(document.querySelectorAll(s)); }

    function initRecently() {
        injectSidebarButton();
        createDrawer();
        attachListeners();
        loadList();
        console.log("Recently Played Loaded (Sidebar Version)");
    }

    /* -----------------------------------------
       1. CREATE SIDEBAR BUTTON (MATCHES UI)
    ------------------------------------------ */
    function injectSidebarButton() {
        // Find your sidebar container
        const sidebar = document.querySelector(".left") || 
                        document.querySelector(".menu") || 
                        document.querySelector(".options");

        if (!sidebar) {
            console.warn("Sidebar not found — cannot add Recently Played button");
            return;
        }

        // Determine the class used by other items
        const sample = sidebar.querySelector("div, .option, .item");
        const className = sample ? sample.className : "";

        // Create the new button
        const btn = document.createElement("div");
        btn.className = className;   // same style as other buttons
        btn.id = "recently-btn";
        btn.innerHTML = `
            <i class="fa-solid fa-clock-rotate-left" style="margin-right:8px;"></i>
            Recently Played
        `;

        // Insert before Exit button
        const exitBtn = Array.from(sidebar.children)
            .find(x => x.innerText.toLowerCase().includes("exit"));

        if (exitBtn) sidebar.insertBefore(btn, exitBtn);
        else sidebar.appendChild(btn);

        // Open drawer on click
        btn.onclick = () => {
            const drawer = $("#recently-drawer");
            drawer.classList.toggle("open");
        };
    }

    /* -----------------------------------------
       2. CREATE DRAWER PANEL
    ------------------------------------------ */
    function createDrawer() {
        const drawer = document.createElement("div");
        drawer.id = "recently-drawer";

        drawer.innerHTML = `
            <div id="recently-header">
                Recently Played
                <span id="recently-close">×</span>
            </div>
            <div id="recently-list"></div>
        `;

        document.body.appendChild(drawer);

        $("#recently-close").onclick = () => {
            drawer.classList.remove("open");
        };
    }

    /* -----------------------------------------
       3. ATTACH PLAY LISTENERS
    ------------------------------------------ */
    function attachListeners() {
        $all("audio").forEach(a => {
            a.addEventListener("play", () => handlePlay(a));
        });
    }

    /* -----------------------------------------
       4. WHEN SONG PLAYS → ADD TO HISTORY
    ------------------------------------------ */
    function handlePlay(audio) {
        const card = getCardByAudio(audio);
        if (!card) return;

        const title = card.querySelector("h1")?.innerText || "Unknown";
        const artist = card.querySelector("p")?.innerText || "";
        const id = `${title} — ${artist}`;

        let list = JSON.parse(localStorage.getItem("recently_played") || "[]");

        // Remove duplicates
        list = list.filter(x => x !== id);

        // Add new entry
        list.unshift(id);

        if (list.length > maxItems) list.pop();

        localStorage.setItem("recently_played", JSON.stringify(list));

        loadList();
    }

    /* -----------------------------------------
       5. MATCH PLAYING AUDIO TO SONG CARD
    ------------------------------------------ */
    function getCardByAudio(a) {
        const songs = $all(".song");
        const audios = $all(".song audio");

        for (let i = 0; i < audios.length; i++) {
            const src1 = (audios[i].src || "").split("/").pop();
            const src2 = (a.src || "").split("/").pop();
            if (src1 === src2) return songs[i];
        }
        return null;
    }

    /* -----------------------------------------
       6. LOAD LIST INSIDE DRAWER
    ------------------------------------------ */
    function loadList() {
        const box = $("#recently-list");
        let list = JSON.parse(localStorage.getItem("recently_played") || "[]");

        box.innerHTML = "";

        if (list.length === 0) {
            box.innerHTML = `<p style="opacity:0.6;">No songs played yet</p>`;
            return;
        }

        list.forEach(text => {
            const item = document.createElement("div");
            item.className = "recent-item";
            item.innerText = text;
            item.onclick = () => playSong(text);
            box.appendChild(item);
        });
    }

    /* -----------------------------------------
       7. PLAY SONG FROM RECENT LIST
    ------------------------------------------ */
    function playSong(text) {
        const songs = $all(".song");

        for (let s of songs) {
            const id = `${s.querySelector("h1")?.innerText || ""} — ${s.querySelector("p")?.innerText || ""}`;
            if (id === text) {
                s.click();
                break;
            }
        }
    }

})();
