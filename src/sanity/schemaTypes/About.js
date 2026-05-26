export default{
    name: "about",
    title: "About",
    type: "document",
    options: {
        singleton: true,
    },
    fields: [
        {
            name: "name",
            title: "About",
            type: "string",
        },
        {
            name: "herotext",
            title: "Hero Text",
            type: "text",
        },
        {
            name: "team",
            title: "Our Team",
            type: "array",
            of: [{type: "object",
                fields: [
                    {
                        name: "project",
                        title: "Project",
                        type: "string",
                    },
                    {
                        name: "members",
                        title: "Team Members",
                        type: "array",
                        of: [{type: "object",
                            fields: [
                                {
                                    name: "person",
                                    title: "Person Name",
                                    type: "string",
                                },
                                {
                                    name: "personimage",
                                    title: "Person Image",
                                    type: "image",
                                    options: {
                                        hotspot: true,
                                    }
                                },
                            ]
                        }]
                    }
                ]
            }]
        },
    ]

}