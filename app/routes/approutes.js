module.exports=function(app) {
  var login=require('../Controller/loginController');
  var disease=require('../Controller/diseaseController');
  var hospital=require('../Controller/hospitalController');
  var hospitalAddress=require('../Controller/hospAddressController');
  var occupation=require('../Controller/occupationController');
  var patient=require('../Controller/patientController');
  var patientAddress=require('../Controller/patAddressController');
  var role=require('../Controller/roleController');
  var stage=require('../Controller/stageController');
  var treatmentDetail=require('../Controller/tDetailController');
  var treatmentRecord=require('../Controller/tRecordController');
  var uniqueId=require('../Controller/uniqueIdTypeController');
  var workAddress=require('../Controller/workAddressController');

  app.route('/logins')
      .get(login.list_all_logins)
      .post(login.create_a_login);

  app.route('/logins/:id')
      .get(login.read_a_login)
      .put(login.update_a_login)
      .delete(login.delete_a_login);


  app.route('/diseases')
      .get(disease.list_all_diseases)
      .post(disease.create_a_disease);

  app.route('/diseases/:id')
      .get(disease.read_a_disease)
      .put(disease.update_a_disease)
      .delete(disease.delete_a_disease);


  app.route('/hospitals')
      .get(hospital.list_all_hospitals)
      .post(hospital.create_a_hospital);

  app.route('/hospitals/:id')
      .get(hospital.read_a_hospital)
      .put(hospital.update_a_hospital)
      .delete(hospital.delete_a_hospital);

  app.route('/hospitalAddresses')
      .get(hospitalAddress.list_all_hospitalAddresses)
      .post(hospitalAddress.create_a_hospitalAddress);

  app.route('/hospitalAddresses/:id')
      .get(hospitalAddress.read_a_hospitalAddress)
      .put(hospitalAddress.update_a_hospitalAddress)
      .delete(hospitalAddress.delete_a_hospitalAddress);


  app.route('/occupations')
      .get(occupation.list_all_occupations)
      .post(occupation.create_a_occupation);

  app.route('/occupations/:id')
      .get(occupation.read_a_occupation)
      .put(occupation.update_a_occupation)
      .delete(occupation.delete_a_occupation);


  app.route('/patients')
      .get(patient.list_all_patients)
      .post(patient.create_a_patient);

  app.route('/patients/:id')
      .get(patient.read_a_patient)
      .put(patient.update_a_patient)
      .delete(patient.delete_a_patient);


  app.route('/patientAddresses')
      .get(patientAddress.list_all_patientAddresses)
      .post(patientAddress.create_a_patientAddress);

  app.route('/patientAddresses/:id')
      .get(patientAddress.read_a_patientAddress)
      .put(patientAddress.update_a_patientAddress)
      .delete(patientAddress.delete_a_patientAddress);


  app.route('/roles')
      .get(role.list_all_roles)
      .post(role.create_a_role);

  app.route('/roles/:id')
      .get(role.read_a_role)
      .put(role.update_a_role)
      .delete(role.delete_a_role);


  app.route('/stages')
      .get(stage.list_all_stages)
      .post(stage.create_a_stage);

  app.route('/stages/:id')
      .get(stage.read_a_stage)
      .put(stage.update_a_stage)
      .delete(stage.delete_a_stage);


  app.route('/treatmentDetails')
      .get(treatmentDetail.list_all_treatmentDetails)
      .post(treatmentDetail.create_a_treatmentDetail);

  app.route('/treatmentDetails/:id')
      .get(treatmentDetail.read_a_treatmentDetail)
      .put(treatmentDetail.update_a_treatmentDetail)
      .delete(treatmentDetail.delete_a_treatmentDetail);

  app.route('/treatmentRecords')
      .get(treatmentRecord.list_all_treatmentRecords)
      .post(treatmentRecord.create_a_treatmentRecord);

  app.route('/treatmentRecords/:id')
      .get(treatmentRecord.read_a_treatmentRecord)
      .put(treatmentRecord.update_a_treatmentRecord)
      .delete(treatmentRecord.delete_a_treatmentRecord);

  app.route('/uniqueId')
      .get(uniqueId.list_all_uniqueIds)
      .post(uniqueId.create_a_uniqueId);

  app.route('/uniqueId/:id')
      .get(uniqueId.read_a_uniqueId)
      .put(uniqueId.update_a_uniqueId)
      .delete(uniqueId.delete_a_uniqueId);

  app.route('/workAddresses')
      .get(workAddress.list_all_workAddresses)
      .post(workAddress.create_a_workAddress);

  app.route('/workAddresses/:id')
      .get(workAddress.read_a_workAddress)
      .put(workAddress.update_a_workAddress)
      .delete(workAddress.delete_a_workAddress);
};
