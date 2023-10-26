
describe('tost test', () => {
    it('passes', () => {
        cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
        cy.get('[alt="Dark Theme"]').click();
        cy.get('.menu-title.ng-tns-c141-19').click();
        cy.get('[title="Toastr"]').click();


        cy.get('.form-group .select-button').eq(0).click();
        cy.get('#nb-option-30').click();
        cy.get('[ng-reflect-name="title"]')
            .clear()
            .type('Test Testenko')
            .should('have.value', 'Test Testenko');
        cy.get('[ng-reflect-name="content"]')
            .clear()
            .type('Awesome content is here')
            .should('have.value', 'Awesome content is here');
        cy.get('.form-group .select-button').eq(1).click();
        cy.get('#nb-option-35').click();
        cy.get('nb-card-footer .mat-ripple')
            .eq(0)
            .click();


        // // const toastsParams = [
        //     {
        //         testData: {
        //             position:'lex',
        //             title:'i',
        //             content:'1990',
        //             toastType:'1999'
        //         },
        //         expectedResult: {
        //             backgroundColor:'Lexus',
        //             position:'IS',
        //
        //         }
        //     }
        // ]
        // fillInToasts.forEach(toastsData=> {

            cy.get('[ng-reflect-name="title"]')
                .clear()
                .type('Test Testenko')
                .should('have.value', 'Test Testenko');
            cy.get('[ng-reflect-name="content"]')
                .clear()
                .type('Awesome content is here')
                .should('have.value', 'Awesome content is here');
            cy.get('.form-group .select-button').eq(1).click();
            cy.get('#nb-option-35').click();
            cy.get('nb-card-footer .mat-ripple').eq(0).click();

            cy.get('nb-toastr-container .ng-tns-c209-54.ng-star-inserted').should("be.visible");
            cy.get('nb-toastr-container .ng-tns-c209-54.ng-star-inserted').then(elementWhichIFound => {
                expect(elementWhichIFound).to.contain.text('Test Testenko');
                expect(elementWhichIFound).to.contain.text('Awesome content is here');
                // there I have a trouble
                expect(elementWhichIFound.has('background')).contain('rgb(255 170 0)');
                // expect(tableCell).to.have.html('Column content');
                // expect(tableCell).to.contain('Column content');
                // expect(tableCell).to.contain(' content');
                // expect(tableCell.text()).to.include('Column content');
                // expect(tableCell.text()).to.include(' content');
                // expect(tableCell).to.not.contain('qwe12');
            })
        // })


        /**
         * +++++3. Клікнути на пункт меню Modal & Overlays
         * +++4. Клікнути на підпункт Toastr
         * 5. Вибрати позицію тосту+ 4 types / top right top left, bottom right bottom left
         * 6. Заповнити title довільним текстом+
         * 7. заповнити content довільним текстом+
         * 8. Обрати тип тоста+/
         * 4 types - check background and picture
         * 9. Клікнути на кнопку "Show toast"
         */
    })
})