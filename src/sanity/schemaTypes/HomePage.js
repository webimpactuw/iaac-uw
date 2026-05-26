export default {
    name: "homepage",
    title: "Home Page",
    type: "document",
    options: {
    singleton: true, // Identify this document as a singleton
    },
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
        },
        {
            name: "mission",
            title: "Mission",
            type: "text",
        },
        {
            name: "joinus",
            title: "Join Us Text",
            type: "text",
        },
        {
            name: "features_title",
            title: "Features Section Title",
            type: "array",
            of: [{type: "text"}],
        },
        {
            name: "projects",
            title: "Projects",
            type: "array",
            of: [{type: "string"}],
        },
        {
            name: "socials",
            title: "Socials",
            type: "array",
            of: [{type: "string"}],
        },
        {
            name: "contact",
            title: "Contact",
            type: "array",
            of: [{type: "string"}],
        },
        {
            name: "sponsors",
            title: "Our Sponsors",
            type: "array",
            of: [{type: "image",
                  options: {
                    hotspot: true,
                  }}],
        },
    ],
};