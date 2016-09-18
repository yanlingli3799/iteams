var mongoose = require('mongoose');

Schema = mongoose.Schema;

var ProjectSchema = new Schema({
  p_creater:{
    type:Schema.Types.ObjectId,
    ref:'User'
  },
  p_name:{
    type:String,
    required:true
  },
  p_life:{
    start:{
      type: Date,
      default: Date.now
    },
    end:{
      type:Date,
      default:Date.now
    }
  },
  p_phase:[{
    start:{
      type:Date,
      default:Date.now
    },
    end:{
      type:Date,
      default:Date.now
    },
    title:{
      type:String
    },
    target:{
      type:String
    }
  }],
  p_team:[{
    mem_id:{
      type:Schema.Types.ObjectId,
    },
    mem_role:{
      type:String
    }
  }]
});

var Project = mongoose.model('Project', ProjectSchema);