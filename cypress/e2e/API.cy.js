describe('API testing', () => {

  let token
  let headers
  const email = 'abcd@gmail.com'
  const password = '123456'

  it('login', () => {
    cy.request('POST','/users/login',{
      email: email,
      password: password
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
      expect(res.status).to.eq(200);
      assert.isObject(res.body, 'response is an object')
    })
  })

  it('fetch detials about a specific device D-1567', ()=> {
    console.log(headers)
    cy.request({method:'GET', url:'/devices/device/D-1567', headers: {'authorization': token}}).then((res)=> {
      console.log(res.body)
      expect(res.status).to.eq(200);
      assert.isArray(res.body, 'response is an Array')
    })
  })

  it('fetch detials about device that does not exit', ()=> {
    console.log(headers)
    cy.request({method:'GET', url:'/devices/device/D-156d7', headers: {'authorization': token}}).then((res)=> {
      console.log(res.body)
      console.log(res.body)
      expect(res.status).to.eq(200);
      assert.isArray(res.body, 'response is an empty Array')
      expect(res.body).has.length(0)
    })
  })


})