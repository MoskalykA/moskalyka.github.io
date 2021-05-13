// noinspection DuplicatedCode

// Discord

const card_open_discord = document.getElementById('card_open_discord')
const card_close_discord = document.getElementById('card_close_discord')
const card_panel_discord = document.getElementById('card_panel_discord')

function discordModalState() {
    if(card_panel_discord.classList.contains('hidden')) {
        // Show modal
        card_panel_discord.classList.remove('hidden')
        card_panel_discord.classList.add('block')

        // Start animation open
        card_panel_discord.classList.add('card_open')
    } else {
        // Delete modal
        card_panel_discord.classList.add('hidden')
        card_panel_discord.classList.remove('block')

        // Remove animation open
        card_panel_discord.classList.remove('card_open')
    }
}

card_open_discord.addEventListener('click', discordModalState)
card_close_discord.addEventListener('click', discordModalState)

// Github

const card_open_github = document.getElementById('card_open_github')
const card_close_github = document.getElementById('card_close_github')
const card_panel_github = document.getElementById('card_panel_github')

function githubModalState() {
    if(card_panel_github.classList.contains('hidden')) {
        // Show modal
        card_panel_github.classList.remove('hidden')
        card_panel_github.classList.add('block')

        // Start animation open
        card_panel_github.classList.add('card_open')
    } else {
        // Delete modal
        card_panel_github.classList.add('hidden')
        card_panel_github.classList.remove('block')

        // Remove animation open
        card_panel_github.classList.remove('card_open')
    }
}

card_open_github.addEventListener('click', githubModalState)
card_close_github.addEventListener('click', githubModalState)

// Stack

const card_open_stack = document.getElementById('card_open_stack')
const card_close_stack = document.getElementById('card_close_stack')
const card_panel_stack = document.getElementById('card_panel_stack')

function stackModalState() {
    if(card_panel_stack.classList.contains('hidden')) {
        // Show modal
        card_panel_stack.classList.remove('hidden')
        card_panel_stack.classList.add('block')

        // Start animation open
        card_panel_stack.classList.add('card_open')
    } else {
        // Delete modal
        card_panel_stack.classList.add('hidden')
        card_panel_stack.classList.remove('block')

        // Remove animation open
        card_panel_stack.classList.remove('card_open')
    }
}

card_open_stack.addEventListener('click', stackModalState)
card_close_stack.addEventListener('click', stackModalState)
