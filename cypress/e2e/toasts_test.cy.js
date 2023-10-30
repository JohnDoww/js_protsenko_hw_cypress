
describe('tost test', () => {

    before(()=>{
        cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
    })

    it('check position, color, title, content of the 4 toast types', () => {

        cy.get('[alt="Dark Theme"]').click();
        cy.get('.menu-title.ng-tns-c141-19').click();
        cy.get('[title="Toastr"]').click();

        const toastsParams = [
            {
                testData: {
                    position: '#nb-option-25',
                    title: 'toast in the top left',
                    content: 'warning toast',
                    toastType: '#nb-option-35',
                },
                expectedResult: {
                    backgroundColor: 'rgb(255, 170, 0)',
                    icon: 'alert-triangle',
                    position: 'justify-content: flex-start; align-items: flex-start;',
                    toastElement:'[class="ng-tns-c209-54 ng-star-inserted"]',
                    toastSettings: '.ng-tns-c209-54.ng-trigger'

                }
            }, {
                testData: {
                    position: '#nb-option-24',
                    title: 'toast in the top right',
                    content: 'success toast',
                    toastType: '#nb-option-33',
                },
                expectedResult: {
                    backgroundColor: 'rgb(0, 214, 143)',
                    icon: 'checkmark',
                    position: 'justify-content: flex-start; align-items: flex-start;',
                    toastElement:'[class="ng-tns-c209-55 ng-star-inserted"]',
                    toastSettings: '.ng-tns-c209-55.ng-star-inserted nb-toast'
                }
            },{
                testData: {
                    position: '#nb-option-26',
                    title: 'toast in the bottom left',
                    content: 'info toast',
                    toastType: '#nb-option-34',
                },
                expectedResult: {
                    backgroundColor: 'rgb(0, 149, 255)',
                    icon: 'question-mark',
                    position: 'justify-content: flex-start; align-items: flex-start;',
                    toastElement:'.ng-tns-c209-56.ng-star-inserted',
                    toastSettings: '.ng-tns-c209-56.ng-trigger'
                }
            },{
                testData: {
                    position: '#nb-option-27',
                    title: 'toast in the bottom right',
                    content: 'dangerous toast',
                    toastType: '#nb-option-36',
                },
                expectedResult: {
                    backgroundColor: 'rgb(255, 61, 113)',
                    icon: 'flash',
                    position: 'justify-content: flex-start; align-items: flex-start;',
                    toastElement:'.ng-tns-c209-57.ng-star-inserted',
                    toastSettings: '.ng-tns-c209-57.ng-trigger'
                }
            }
        ]
        toastsParams.forEach(toastsData => {

            cy.get('.form-group .select-button')
                .eq(0)
                .click();
            cy.get(toastsData.testData.position)
                .click();

            cy.get('[ng-reflect-name="title"]')
                .clear()
                .type(toastsData.testData.title)
                .should('have.value', toastsData.testData.title);
            cy.get('[ng-reflect-name="content"]')
                .clear()
                .type(toastsData.testData.content)
                .should('have.value', toastsData.testData.content);
            cy.get('.form-group .select-button')
                .eq(1)
                .click();
            cy.get(toastsData.testData.toastType)
                .click();
            cy.get('nb-card-footer .mat-ripple')
                .eq(0)
                .click();

            cy.get(toastsData.expectedResult.toastElement).then(elementWhichIFound => {
                cy.get(toastsData.expectedResult.toastSettings)
                    .should('have.css', 'background-color', toastsData.expectedResult.backgroundColor);

                expect(elementWhichIFound)
                    .to
                    .contain.text(toastsData.testData.title);

                expect(elementWhichIFound)
                    .to
                    .contain.text(toastsData.testData.content);

                expect(elementWhichIFound)
                    .to
                    .contain.html('data-name')
                    .to
                    .html(toastsData.expectedResult.icon);

                cy.get('[class="toastr-overlay-container cdk-global-overlay-wrapper"]')
                    .should('have.attr', 'style', toastsData.expectedResult.position);
            })
        })
    })
})