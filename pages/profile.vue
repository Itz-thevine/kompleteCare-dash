
<template>
  <div>
    <h1>Profile</h1>
    {{data}}
    {{error}}
  </div>
</template>

<script setup>
    import axios from 'axios'


      // var formdata = new FormData();
      // formdata.append("email", "tester@kompletecare.com");
      // formdata.append("password", "password");
      
      // var requestOptions = {
      //   method: 'POST',
      //   body: formdata,
      //   redirect: 'follow'
      // };
      
      // const {data , pending, error} = await useFetch('https://testdrive.kompletecare.com/api/login', requestOptions)

      var formdata = new FormData();
      const token = '2099|ORqI2IaH6CZGVwREw7HaQ6AVdEzGdFKBAb0Y3JrN'

        
        formdata.append("_token", "{{ csrf_token() }}");
        formdata.append("investigations[5]", "9");
        formdata.append("investigations[0]", "12");
        formdata.append("ctscan", "fhjdf dfjfdhjf");
        formdata.append("mri", "dfdfd");
        formdata.append("developer", "Developer");

            
      const {data , pending, error} = useFetch('https://testdrive.kompletecare.com/api/investigations', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: `application/json`
        },
        body: formdata,
        redirect: 'follow'
      })

     

      // axios.defaults.headers.common['Authorization'] = `Bearer 2101|sk6Br5Me3Mx5oRvMWT8OIN3mfXsAzE40eOf5UflD`;

      // const {data, pending, error} = useAsyncData ('data', async () => {
      //   const req = await axios.post('https://testdrive.kompletecare.com/api/investigations', {
      //     method: 'POST',
      //     headers: {
      //       Accept: `application/json`
      //     },
      //     body: formdata,
      //     redirect: 'follow'
      //   })
      // })


      // console.log(data)

        
</script>
