let homescoreEl = document.getElementById("home-score-el")
let homefoulEl = document.getElementById("home-foul-number")

let home_score = 0
let home_foul = 0

function home_add_1() {
    home_score += 1
    homescoreEl.textContent = home_score
    leader()
}

function home_add_2() {
    home_score += 2
    homescoreEl.textContent = home_score
    leader()
}

function home_add_3() {
    home_score += 3
    homescoreEl.textContent = home_score
    leader()
}

function home_incrementFoul() {
    home_foul += 1
    homefoulEl.textContent = home_foul
}

let guestscoreEl = document.getElementById("guest-score-el")
let guestfoulEl = document.getElementById("guest-foul-number")

let guest_score = 0
let guest_foul = 0

function guest_add_1() {
    guest_score += 1
    guestscoreEl.textContent = guest_score
    leader()
}

function guest_add_2() {
    guest_score += 2
    guestscoreEl.textContent = guest_score
    leader()
}

function guest_add_3() {
    guest_score += 3
    guestscoreEl.textContent = guest_score
    leader()
}

function guest_incrementFoul() {
    guest_foul += 1
    guestfoulEl.textContent = guest_foul
}

function leader() {
    if (home_score > guest_score) {
        document.getElementById("home").style.color = "rgb(249, 122, 31)";
        homescoreEl.style.color = "rgb(249, 122, 31)";
        document.getElementById("home-box").style.border = "5px solid rgb(249, 122, 31)";
        document.getElementById("home-box").style.boxShadow = "0 0 20px rgb(249, 122, 31)";

        document.getElementById("guest").style.color = "white";
        guestscoreEl.style.color = "white";
        document.getElementById("guest-box").style.border = "5px solid rgb(58, 58, 60)"
        document.getElementById("guest-box").style.boxShadow = "none";

    } else if (guest_score > home_score) {
        document.getElementById("guest").style.color = "rgb(249, 122, 31)";
        guestscoreEl.style.color = "rgb(249, 122, 31)";
        document.getElementById("guest-box").style.border = "5px solid rgb(249, 122, 31)";
        document.getElementById("guest-box").style.boxShadow = "0 0 20px rgb(249, 122, 31)";

        document.getElementById("home").style.color = "white";
        homescoreEl.style.color = "white";
        document.getElementById("home-box").style.border = "5px solid rgb(58, 58, 60)";
        document.getElementById("home-box").style.boxShadow = "none";

    } else { // tie
        document.getElementById("home").style.color = "white";
        homescoreEl.style.color = "white";
        document.getElementById("home-box").style.border = "5px solid rgb(58, 58, 60)";
        document.getElementById("home-box").style.boxShadow = "none";

        document.getElementById("guest").style.color = "white";
        guestscoreEl.style.color = "white";
        document.getElementById("guest-box").style.border = "5px solid rgb(58, 58, 60)"
        document.getElementById("guest-box").style.boxShadow = "none";
    }
}

function newGame() {
    home_score = 0
    home_foul = 0
    guest_score = 0
    guest_foul = 0
    homescoreEl.textContent = home_score
    homefoulEl.textContent = home_foul
    guestscoreEl.textContent = guest_score
    guestfoulEl.textContent = guest_foul
    leader()
}