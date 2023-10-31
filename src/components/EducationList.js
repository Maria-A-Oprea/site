import React, { useEffect, useState } from "react";
import { Link } from '@site/src/components/Utils';


{/* "I showed that people of similar socio-demographic backgrounds understand each other's sarcasm more often than people of dissimilar backgrounds (<a target=\"_blank\" rel=\"noopener noreferrer\" href=\"/publications/#oprea-magdy-2020-the-effect\">CSCW 2020 paper</a>)",
        "I built a sarcastic chatbot based on a formal llinguistic theory of sarcasm (<a target=\"_blank\" rel=\"noopener noreferrer\" href=\"/publications/#oprea-etal-2021-chandler\">EMNLP 2021 demo</a>)",
        "I investigated when it is appropriate for chatbots to be sarcastic, and how they should formulate their utterances (<a target=\"_blank\" rel=\"noopener noreferrer\" href=\"/publications/#oprea-etal-2022-chatbot\">ACL 2022 paper</a>)."
        <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://era.ed.ac.uk/handle/1842/40531\">Computational Sarcasm Detection and Understanding in Online Communication</a>
        </React.Fragment> */}
        // <p>
        // Along the way, I was an intern: at Frontier Development Lab in 2019, working on flood segmentation in satellite images, in collaboration with the European Space Agency and UNICEF; at Huawei, working on
        //             </p>

export const educationList = [
    {
        dates: "2017 - 2023",
        degree: "PhD in Data Science",
        institution: "the University of Edinburgh",
        description: <React.Fragment>
            <p>
I used computational methods to detect and understand the phenomenon of sarcasm, as it is manifested in online textual communication, together with my supervisors, <Link href="https://homepages.inf.ed.ac.uk/wmagdy/">Walid Magdy</Link>, <Link href="https://homepages.inf.ed.ac.uk/bonnie/">Bonnie Webber</Link>, and <Link href="https://mariawolters.net/">Maria Wolters</Link>.
            </p>
            <p>
More specifically, I built a dataset of texts annotated for sarcasm (<Link href="https://aclanthology.org/2020.acl-main.118.pdf">ACL 2020 paper</Link>), introduced sarcasm detection models (<Link href="https://aclanthology.org/P19-1275.pdf">ACL 2019 paper</Link>), and organised a competition encouraging the community to build such models (<Link href="https://aclanthology.org/2022.semeval-1.111.pdf">SemEval 2022 paper</Link>).

I also showed that people of similar socio-demographic backgrounds understand each other's sarcasm more often than people of dissimilar backgrounds (<Link href="https://doi.org/10.1145/3392834">CSCW 2022 paper</Link>).

Finally, I built a sarcastic chatbot (<Link href="https://aclanthology.org/2021.emnlp-demo.38.pdf">EMNLP 2021 demo</Link>), and investigated when it is appropriate for chatbots to be sarcastic, and how they should formulate their utterances (<Link href="https://aclanthology.org/2022.acl-long.530.pdf">ACL 2022 paper</Link>).
            </p>
            <p>
Check out my thesis, <Link href="https://era.ed.ac.uk/handle/1842/40531">Computational Sarcasm Detection and Understanding in Online Communication</Link>.
            </p>
            <p>
Along the way, I had fun as an intern at Frontier Development Lab in 2019, at Huawei in 2020, and at Amazon Alexa AI in 2021. See the <Link href="/#work">Work</Link> section above for details.
            </p>
        </React.Fragment>
    },
    {
        dates: "2017 - 2018",
        degree: "MRes in Data Science",
        institution: "the University of Edinburgh",
        description: <React.Fragment>
I used computational methods to detect the presence of sarcasm in tweets, together with my supervisor, <Link href="https://homepages.inf.ed.ac.uk/wmagdy/">Walid Magdy</Link>.
        </React.Fragment>
    },
    {
        dates: "2012 - 2013",
        degree: "MSc in Computer Science",
        institution: "the University of Oxford",
        description: <React.Fragment>
I worked with <Link href="https://scholar.google.co.uk/citations?user=eJwbbXEAAAAJ">Phil Blunsom</Link> on building character-level language models for the Romanian language using recurrent neural networks.
        </React.Fragment>
    },
    {
        dates: "2009 - 2012",
        degree: "BSc in Computer Science",
        institution: "Jacobs University Bremen",
        description: <React.Fragment>
This is where my interest in natural language processing was triggered, working with <Link href="https://kwarc.info/people/mkohlhase/">Michael Kohlhase</Link>.
        </React.Fragment>
    }
]