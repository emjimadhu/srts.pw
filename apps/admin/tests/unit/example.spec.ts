import { shallowMount } from "@vue/test-utils";

import HelloWorld from "../../src/components/HelloWorld.vue";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    expect.assertions(1)

    const message = "new message";
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg: message }
    });

    expect(wrapper.text()).toMatch(message);
  });
});
