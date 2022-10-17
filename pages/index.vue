<script setup>

  import {ref, onMounted} from 'vue';

  var token = '2092|VBGWzp7DsPxfUie6dWRZbXkveZOaruDCQDA0pOLS'
  
  const {data: medRecords , pending, error} = await useFetch('https://testdrive.kompletecare.com/api/investigations', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: `application/json`
    },
    redirect: 'follow'
  })

  const medicalReport = ref({
    'xRay' : [],
    'ultraSoundScan': []
  })

  

  const submitData = () => {
    
    if(medicalReport.value.xRay.length || medicalReport.value.ultraSoundScan.length  > 0){
      
      const {xRay, ultraSoundScan} = medicalReport.value;

      var formdata = new FormData();
      
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


    }else{
      console.log('can\'t submit null value')
    }



  }

</script>

<template>
    <div>
      <h1 class="text-3xl text-customTxt font-bold">
        Update Patient Medical Record
      </h1>
      <p class=" text-menuText my-2">Click the tabs to view and edit patient medical details</p>
     {{postData}}
     <!-- {{postError}} -->
      <Card>
        <form @submit.prevent="submitData">
          <p class="text-customTxt font-bold mt-10">{{medRecords.data[0].title}}</p>
          <ul class="flex mt-5 flex-wrap">
            <li class="flex items-center w-1/4 py-5" v-for='(medRecord, index) in medRecords.data[0].investigations' :key="index" >
              <input type="checkbox" class="mr-3" :value="medRecord.title" v-model="medicalReport.xRay">
              <label >{{medRecord.title}}</label>
            </li>
          </ul>
          
          <hr>

          <p class="text-customTxt font-bold">{{medRecords.data[1].title}}</p>

          <ul class="flex mt-5 flex-wrap">
            <li class="flex items-center w-1/4 py-5" v-for='(medRecord, index) in medRecords.data[1].investigations' :key="index" >
              <input type="checkbox" class="mr-3" :value="medRecord.title"  v-model="medicalReport.ultraSoundScan">
              <label >{{medRecord.title}}</label>
            </li>
          </ul>
        
          <!-- djskdj -->
          <div class="flex">
              
              <CardContent class="mr-10">MRI</CardContent>
              <CardContent>CT scan</CardContent>
          
          </div>

          <div class="w-full flex justify-end">
            <input type="submit" class="mt-10 rounded-lg text-white bg-customTxt font-bold px-6 py-2" value="Save and Send">
          </div>
        </form>
      
      </Card>
    </div>
  </template>
  
  