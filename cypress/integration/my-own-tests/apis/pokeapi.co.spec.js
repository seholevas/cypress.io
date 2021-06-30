describe("API Testing", ()=>{
    
    
    it("GET method", ()=>{
        cy.request("https://pokeapi.co/api/v2/pokemon/pikachu").then((res)=>{
            expect(res).to.have.property("status",200)
            expect(res.body).to.have.property("name","pikachu")
        })
    })



})