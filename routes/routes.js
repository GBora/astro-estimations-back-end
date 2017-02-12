let estimationRequestAPI = require('../api/estimation_requests/estimation_request.api.js');

let routes = [{
    method: 'POST',
    path:'/new-estimation', 
    handler: estimationRequestAPI.addEstimationRequest
},
{
    method: 'GET',
    path:'/estimation/{id}', 
    handler: estimationRequestAPI.getEstimationsById
},
{
    method: 'PUT',
    path:'/estimation/{id}', 
    handler: estimationRequestAPI.updateEstimationById
}];

module.exports = routes;