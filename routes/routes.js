let estimationRequestAPI = require('../api/estimation_requests/estimation_request.api.js');

let routes = [{
    method: 'POST',
    path:'/new-estimation', 
    config: {
        handler: estimationRequestAPI.addEstimationRequest,
        description: 'Add estimation request',
        notes: 'Here you can post a new estimation request and it will be created and saved',
        tags: ['api']
    }
    
},
{
    method: 'GET',
    path:'/estimation/{id}', 
    config: {
        handler: estimationRequestAPI.getEstimationsById,
        description: 'Retrieve a estimation request by its id',
        notes: 'To get a estimation you need to the request_id',
        tags: ['api']
    }
    
},
{
    method: 'PUT',
    path:'/estimation/{id}', 
    config: {
        handler: estimationRequestAPI.updateEstimationById,
        description: 'Update a request',
        notes: 'Update a request to add estimations to it',
        tags: ['api']
    }
}];

module.exports = routes;