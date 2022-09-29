describe('API testing', () => {

  let token
  let headers

  it('login', () => {
    cy.request('POST','/users/login',{
      email: 'shashank.chutke@gmail.com',
      password: 'R!nkuj05'
    }).then((res) => {
      token = res.body.data
      headers = {
        authorization: token,
      };

    })
  })


  it('fetch all loations of devices', ()=> {
    console.log(headers)
    cy.request({method:'GET', url:'/devices', headers: {'authorization': token}}).then((res)=> {
      expect(res.body).has.length.above(10)
    })
  })

  it('fetch detials about a specific device D-1567', ()=> {
    console.log(headers)
    cy.request({method:'GET', url:'/devices/D-1567', headers: {'authorization': token}}).then((res)=> {
      console.log(res.body)
      expect(res.body).has.length.above(0)
    })
  })

  it('fetch detials about device that does not exit', ()=> {
    console.log(headers)
    cy.request({method:'GET', url:'/devices/D-156d7', headers: {'authorization': token}}).then((res)=> {
      console.log(res.body)
      expect(res.body).has.length(0)
    })
  })


})