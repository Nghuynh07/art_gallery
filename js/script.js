// img observer api starts
const images = document.querySelectorAll(".img");
const options = {
  root: null,
  threshold: 0.1,
};

const imgCallbackFunc = (entries, observer) => {
  entries.forEach((entry) => {
    const src = entry.target.attributes[0];
    entry.target.classList.remove("img__blur");
    src.textContent = entry.target.srcset;
    if (!entry.isIntersecting) entry.target.classList.add("img__blur");
  });
};

const imgObserver = new IntersectionObserver(imgCallbackFunc, options);

images.forEach((img) => {
  imgObserver.observe(img);
});
// img observer api ends

// heading observer api starts
const headings = document.querySelectorAll(".heading");

const headingCallbackFunc = (entries, observer) => {
  entries.forEach((e) => {
    e.target.classList.remove("heading__animation");
    if (!e.isIntersecting) e.target.classList.add("heading__animation");
  });
};

const headingsOptions = {
  root: null,
  threshold: 0.1,
};

const headingObserver = new IntersectionObserver(headingCallbackFunc, options);

headings.forEach((h) => {
  headingObserver.observe(h);
});

// heading observer api ends

// text observer api starts
const texts = document.querySelectorAll(".text");

const textCallbackFunc = (entries, observer) => {
  entries.forEach((e) => {
    e.target.classList.remove("text__animation");
    if (!e.isIntersecting) e.target.classList.add("text__animation");
  });
};

const textOptions = {
  root: null,
  threshold: 0.1,
};

const textObserver = new IntersectionObserver(textCallbackFunc, options);

texts.forEach((t) => {
  textObserver.observe(t);
});
// text observer api ends

// link observer api starts
const links = document.querySelectorAll(".link");

const linkCallbackFunc = (entries, observer) => {
  entries.forEach((e) => {
    e.target.classList.remove("link__animation");
    if (!e.isIntersecting) e.target.classList.add("link__animation");
  });
};

const linkObserver = new IntersectionObserver(linkCallbackFunc, options);

links.forEach((l) => {
  linkObserver.observe(l);
});

// link observer api ends

// icon observer api starts

const icons = document.querySelectorAll(".icon");

const iconCallbackFunc = (entries, observer) => {
  entries.forEach((e) => {
    e.target.classList.remove("icon__animation");
    if (!e.isIntersecting) e.target.classList.add("icon__animation");
  });
};

const iconObserver = new IntersectionObserver(iconCallbackFunc, options);

icons.forEach((i) => iconObserver.observe(i));

// icon observer api ends
