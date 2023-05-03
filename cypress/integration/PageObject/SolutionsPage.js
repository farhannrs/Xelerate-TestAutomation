
class SolutionsPage{
    pagetitle(value) {  
        cy.get('span[class="runnable-title"]')
    }

    clickOnFilter(){
        cy.get('[data-testid="FilterAltIcon"]').click()
    }
    selectTag(){
        
    }

    clickOndrawer(){
        cy.get('button[id="drawer"]').click()
    }
    clickOnSettings(){
        cy.get('a[id="module-Settings"]').click()
    }

    
}

export default SolutionsPage