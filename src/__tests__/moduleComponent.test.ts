import ModuleComponent from "../moduleComponent.vue";
import { mount } from "@vue/test-utils";

describe("moduleComponent", () => {
  it("to compile", () => {
    const wrapper = mount(ModuleComponent);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
