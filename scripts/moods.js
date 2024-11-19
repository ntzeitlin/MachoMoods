export const moodCardGenerator = (database) => {
    let cardHTML = ""
    let num = 1;
    let gridID = 1
    for (const cardObject of database) {
        if (num > 3 && num < 7) {
            gridID = 2
        } else if (num >= 7) {
            gridID = 3
        }
        cardHTML += `
            <article class="moodcard" style="grid-column: ${gridID}, grid-row: 1" >
                <h3>${cardObject.name}</h3>
                <img src="${cardObject.imageUrl}" />
                <div class="quoteblock">
                    <h4>Macho Advice:\n\n ${cardObject.text}</h4>
                    <p>"${cardObject.quotes[0]}"</p>
                    <p>"${cardObject.quotes[1]}"</p> 
                </div>
            </article>
        `
        num++
    }
    return cardHTML
}