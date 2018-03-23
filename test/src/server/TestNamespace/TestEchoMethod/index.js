import { RPCMethod } from "ffwd/rpc";

const TestEchoMethod = new RPCMethod({

  roles: [],
  mixins: [],

  validate: function(obj) {
    return !!obj;
  },

  run() {
    console.log("TestEchoMethod");
  }

});

export default TestEchoMethod;
