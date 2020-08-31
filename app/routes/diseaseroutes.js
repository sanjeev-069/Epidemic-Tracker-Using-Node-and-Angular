module.exports=function(app) {
  var disease=require('../Controller/diseaseController');

  app.route('/disease')
      .get(disease.list_all_diseases)
      .post(disease.create_a_disease);
  app.route('/disease/:id')
      .get(disease.read_a_disease)
      .put(disease.update_a_disease)
      .delete(disease.delete_a_disease);
};
