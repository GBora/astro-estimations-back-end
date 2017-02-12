let addEstimationRequest = function (request, reply) {
    var db = request.server.plugins['hapi-mongodb'].db;

    db.collection('estimations').insertOne(request.payload, ()=> {
        return reply(true);
    }, (err)=> {
        console.error(err);
        return reply(false);
    })
    
};

let getEstimationsById = function (request, reply) {
    var db = request.server.plugins['hapi-mongodb'].db;

    db.collection('estimations').findOne({request_id: request.params.id}, (err, estimation)=> {
        let output;
        if (err) {
            console.error(err);
            output = false;
        }
        output = estimation;
        return reply(output);
    }) 
}

let updateEstimationById = function (request, reply) {
    var db = request.server.plugins['hapi-mongodb'].db;

    var updatedRequest = {
        title: request.payload.title,
        description: request.payload.description,
        method: request.payload.method,
        creator_ip: request.payload.creator_ip,
        request_id: request.payload.request_id,
        individual_estimations: request.payload.individual_estimations,
        participants_ips: request.payload.participants_ips
    }

    db.collection('estimations').update({request_id: request.params.id}, updatedRequest , (err, estimation)=> {
        let output;
        if (err) {
            console.error(err);
            output = false;
        }
        output = true;
        return reply(output);
    })
    
}


let api = {
    addEstimationRequest: addEstimationRequest,
    getEstimationsById: getEstimationsById,
    updateEstimationById: updateEstimationById
}

module.exports = api;