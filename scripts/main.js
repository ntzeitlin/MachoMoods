import { getMoodDatabase } from "./database.js"
import { moodCardGenerator } from "./moods.js"

const cardHTML = moodCardGenerator(getMoodDatabase())

const container = document.querySelector('#container')
container.innerHTML = cardHTML