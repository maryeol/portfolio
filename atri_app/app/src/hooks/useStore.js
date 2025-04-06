import create from "zustand";

// unsafe merge state
// and mew properties will added or existing properties will be changed
// but the type of value of the property must not change
function mergeState(baseState, newState) {
  if (
    typeof newState === "object" &&
    !Array.isArray(newState) &&
    newState !== null
  ) {
    const keys = Object.keys(newState);
    keys.forEach((key) => {
      // create a new key in base if not exists
      if (!(key in baseState)) {
        baseState[key] = {};
      }
      if (typeof newState[key] === "object" && !Array.isArray(newState[key]))
        mergeState(baseState[key], newState[key]);
      else baseState[key] = newState[key];
    });
  }
}

const useStore = create((set) => {
  return {
    setPage: (pageName, newState) =>
      set((state) => {
        const pageState = JSON.parse(JSON.stringify(state[pageName]));
        mergeState(pageState, newState);
        return { [pageName]: pageState };
      }),
  };
});

export function updateStoreStateFromController(pageName, newState) {
  useStore.getState().setPage(pageName, newState);
}

const desktopModeProps = {
  ...{
  "Home": {
    "Flex412": {
      "callbacks": {}
    },
    "Flex478": {
      "callbacks": {}
    },
    "Flex411": {
      "callbacks": {}
    },
    "Flex409": {
      "callbacks": {}
    },
    "Flex408": {
      "callbacks": {}
    },
    "Div1": {
      "callbacks": {}
    },
    "Flex410": {
      "callbacks": {}
    },
    "Flex420": {
      "callbacks": {}
    },
    "Flex419": {
      "callbacks": {}
    },
    "Flex416": {
      "callbacks": {}
    },
    "Flex413": {
      "callbacks": {}
    },
    "Flex417": {
      "callbacks": {}
    },
    "Flex414": {
      "callbacks": {}
    },
    "Flex418": {
      "callbacks": {}
    },
    "Flex415": {
      "callbacks": {}
    },
    "Flex501": {
      "callbacks": {}
    },
    "Flex498": {
      "callbacks": {}
    },
    "Flex495": {
      "callbacks": {}
    },
    "Flex428": {
      "callbacks": {}
    },
    "Flex426": {
      "callbacks": {}
    },
    "Flex427": {
      "callbacks": {}
    },
    "Flex421": {
      "callbacks": {}
    },
    "Flex422": {
      "callbacks": {}
    },
    "Flex423": {
      "callbacks": {}
    },
    "Flex424": {
      "callbacks": {}
    },
    "Flex425": {
      "callbacks": {}
    },
    "Flex463": {
      "callbacks": {}
    },
    "Flex461": {
      "callbacks": {}
    },
    "Flex459": {
      "callbacks": {}
    },
    "Flex453": {
      "callbacks": {}
    },
    "Flex441": {
      "callbacks": {}
    },
    "Flex429": {
      "callbacks": {}
    },
    "Flex430": {
      "callbacks": {}
    },
    "Flex442": {
      "callbacks": {}
    },
    "Flex454": {
      "callbacks": {}
    },
    "Flex443": {
      "callbacks": {}
    },
    "Flex431": {
      "callbacks": {}
    },
    "Flex432": {
      "callbacks": {}
    },
    "Flex444": {
      "callbacks": {}
    },
    "Flex455": {
      "callbacks": {}
    },
    "Flex445": {
      "callbacks": {}
    },
    "Flex446": {
      "callbacks": {}
    },
    "Flex433": {
      "callbacks": {}
    },
    "Flex434": {
      "callbacks": {}
    },
    "Flex462": {
      "callbacks": {}
    },
    "Flex460": {
      "callbacks": {}
    },
    "Flex457": {
      "callbacks": {}
    },
    "Flex449": {
      "callbacks": {}
    },
    "Flex450": {
      "callbacks": {}
    },
    "Flex437": {
      "callbacks": {}
    },
    "Flex438": {
      "callbacks": {}
    },
    "Flex493": {
      "callbacks": {}
    },
    "Flex491": {
      "callbacks": {}
    },
    "Flex492": {
      "callbacks": {}
    },
    "Flex458": {
      "callbacks": {}
    },
    "Flex451": {
      "callbacks": {}
    },
    "Flex439": {
      "callbacks": {}
    },
    "Flex440": {
      "callbacks": {}
    },
    "Flex477": {
      "callbacks": {}
    },
    "Flex476": {
      "callbacks": {}
    },
    "Flex474": {
      "callbacks": {}
    },
    "Flex490": {
      "callbacks": {}
    },
    "Flex488": {
      "callbacks": {}
    },
    "Flex489": {
      "callbacks": {}
    },
    "Flex487": {
      "callbacks": {}
    },
    "Menu15": {
      "custom": {
        "open": false,
        "iconHeight": 24,
        "iconWidth": 24,
        "alignRight": true,
        "gap": ""
      },
      "callbacks": {}
    },
    "Flex486": {
      "callbacks": {}
    },
    "Image62": {
      "custom": {
        "alt": "profile pic",
        "src": "/app-assets/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox348": {
      "custom": {
        "text": "I hold a Bachelor's in Computer Science and a Master's in Applied Artificial Intelligence."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image61": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/arrow-right.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox345": {
      "custom": {
        "text": "Download resume"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button68": {
      "custom": {
        "text": "Contact Me"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox346": {
      "custom": {
        "text": "I am  AI engineer"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox347": {
      "custom": {
        "text": "based in Korea"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox364": {
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox365": {
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox366": {
      "custom": {
        "text": "Skills&Cerificates"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox358": {
      "custom": {
        "text": "Extracurricular Certifications"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox349": {
      "custom": {
        "text": "PlusPlanner member 2023"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox350": {
      "custom": {
        "text": "Best Incheon International Airport member 2024"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox351": {
      "custom": {
        "text": "Korea Travel Mate member 2023 "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox443": {
      "custom": {
        "text": "Salam Seoul Ambassador  2024"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox444": {
      "custom": {
        "text": "Best Salam Seoul Ambassador  2023"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox445": {
      "custom": {
        "text": "Best Korea Arab Society member 2023"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox361": {
      "custom": {
        "text": "AI & Technical Certifications"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox352": {
      "custom": {
        "text": "eg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox353": {
      "custom": {
        "text": "eg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox354": {
      "custom": {
        "text": "eg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox363": {
      "custom": {
        "text": "Programming Languages"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox355": {
      "custom": {
        "text": "C/C++"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox356": {
      "custom": {
        "text": "Python"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox357": {
      "custom": {
        "text": "Java"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox436": {
      "custom": {
        "text": "Language"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox427": {
      "custom": {
        "text": "French: Business fluent"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox428": {
      "custom": {
        "text": "English: Business fluent"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox429": {
      "custom": {
        "text": "Korean: Topik 4 "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox442": {
      "custom": {
        "text": "Arabic: Native"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox377": {
      "custom": {
        "text": "Paper submissions"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox378": {
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox367": {
      "custom": {
        "text": "ITC-CSCC 2024"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox368": {
      "custom": {
        "text": "PAPER TITLE"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox369": {
      "custom": {
        "text": "PAPER TITLE"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox370": {
      "custom": {
        "text": "Scientific Data Journal,  Rank"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox371": {
      "custom": {
        "text": "Computer Human Interface (CHI) International Conference 2025"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox372": {
      "custom": {
        "text": "PAPER TITLE"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox373": {
      "custom": {
        "text": "IEEE Journal"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox374": {
      "custom": {
        "text": "PAPER TITLE"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox375": {
      "custom": {
        "text": "ITC-CSCC 2025"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox376": {
      "custom": {
        "text": "PAPER TITLE"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox403": {
      "custom": {
        "text": "💼  Work Experience"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image66": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/arrow-link.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox379": {
      "custom": {
        "text": "Atri Labs"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox380": {
      "custom": {
        "text": "• 2013-2015"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox381": {
      "custom": {
        "text": "Software Engineer"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox397": {
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image67": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/arrow-link.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox382": {
      "custom": {
        "text": "Atri Labs"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox383": {
      "custom": {
        "text": "• 2013-2015"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox384": {
      "custom": {
        "text": "Software Engineer"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox398": {
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox399": {
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox385": {
      "custom": {
        "text": "Software Engineer"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox386": {
      "custom": {
        "text": "• 2013-2015"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox387": {
      "custom": {
        "text": "Atri Labs"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image68": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/arrow-link.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox404": {
      "custom": {
        "text": "📚  Education"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox401": {
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox391": {
      "custom": {
        "text": "Language year"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox392": {
      "custom": {
        "text": "• 2022-2023"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox393": {
      "custom": {
        "text": "Daejeon University"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image70": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/arrow-link.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image76": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/arrow-link.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox423": {
      "custom": {
        "text": "Higher Institue of Computer Science"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox424": {
      "custom": {
        "text": "• 2019-2022"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox425": {
      "custom": {
        "text": "Bs, Computer Science"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image71": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/arrow-link.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox394": {
      "custom": {
        "text": "Seoul National University of Science&Technology"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox395": {
      "custom": {
        "text": "• 2023-2025"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox396": {
      "custom": {
        "text": "MS, Applied Artificial Intelligence"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox413": {
      "custom": {
        "text": "Feel free to contact me at mariemkallel36@gmail.com"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox414": {
      "custom": {
        "text": "Get in touch"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image75": {
      "custom": {
        "alt": "linkedin",
        "src": "/app-assets/LinkedIn%20logo.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "mariem_kallel": {
      "custom": {
        "text": "mariem kallel "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox421": {
      "custom": {
        "text": "Resume"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button72": {
      "custom": {
        "text": "Contact Me"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox419": {
      "custom": {
        "text": "Mail"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox420": {
      "custom": {
        "text": "Download CV"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    }
  },
  "dc": {
    "Flex29": {
      "callbacks": {}
    },
    "Flex27": {
      "callbacks": {}
    },
    "Menu3": {
      "custom": {
        "open": false,
        "iconHeight": 24,
        "iconWidth": 24,
        "alignRight": true,
        "gap": ""
      },
      "callbacks": {}
    },
    "Flex25": {
      "callbacks": {}
    },
    "Flex26": {
      "callbacks": {}
    },
    "Flex28": {
      "callbacks": {}
    },
    "Flex33": {
      "callbacks": {}
    },
    "Flex32": {
      "callbacks": {}
    },
    "Flex30": {
      "callbacks": {}
    },
    "Flex31": {
      "callbacks": {}
    },
    "Flex162": {
      "callbacks": {}
    },
    "Flex67": {
      "callbacks": {}
    },
    "Flex34": {
      "callbacks": {}
    },
    "Flex49": {
      "callbacks": {}
    },
    "Flex99": {
      "callbacks": {}
    },
    "Flex97": {
      "callbacks": {}
    },
    "Flex98": {
      "callbacks": {}
    },
    "Flex95": {
      "callbacks": {}
    },
    "Flex96": {
      "callbacks": {}
    },
    "Flex202": {
      "callbacks": {}
    },
    "Flex200": {
      "callbacks": {}
    },
    "Flex198": {
      "callbacks": {}
    },
    "Flex199": {
      "callbacks": {}
    },
    "Flex201": {
      "callbacks": {}
    },
    "Flex207": {
      "callbacks": {}
    },
    "Flex205": {
      "callbacks": {}
    },
    "Flex203": {
      "callbacks": {}
    },
    "Flex204": {
      "callbacks": {}
    },
    "Flex206": {
      "callbacks": {}
    },
    "Flex84": {
      "callbacks": {}
    },
    "Flex83": {
      "callbacks": {}
    },
    "Flex82": {
      "callbacks": {}
    },
    "Flex78": {
      "callbacks": {}
    },
    "Flex72": {
      "callbacks": {}
    },
    "Flex73": {
      "callbacks": {}
    },
    "Flex79": {
      "callbacks": {}
    },
    "Flex192": {
      "callbacks": {}
    },
    "Flex190": {
      "callbacks": {}
    },
    "Flex191": {
      "callbacks": {}
    },
    "Flex188": {
      "callbacks": {}
    },
    "Flex189": {
      "callbacks": {}
    },
    "Flex197": {
      "callbacks": {}
    },
    "Flex195": {
      "callbacks": {}
    },
    "Flex196": {
      "callbacks": {}
    },
    "Flex193": {
      "callbacks": {}
    },
    "Flex194": {
      "callbacks": {}
    },
    "Flex124": {
      "callbacks": {}
    },
    "Flex115": {
      "callbacks": {}
    },
    "Flex117": {
      "callbacks": {}
    },
    "Flex121": {
      "callbacks": {}
    },
    "Flex118": {
      "callbacks": {}
    },
    "Flex125": {
      "callbacks": {}
    },
    "Flex126": {
      "callbacks": {}
    },
    "TextBox22": {
      "custom": {
        "text": "Download CV"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox23": {
      "custom": {
        "text": "Mail"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button6": {
      "custom": {
        "text": "Contact Me"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox128": {
      "custom": {
        "text": "Resume"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox25": {
      "custom": {
        "text": "Person Name"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image4": {
      "custom": {
        "alt": "profile pic",
        "src": "/app-assets/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox29": {
      "custom": {
        "text": "Hi! I’m Jake, a product designer based in Berlin. I create user-friendly interfaces for fast-growing startups."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox26": {
      "custom": {
        "text": "delight and inspire people"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox27": {
      "custom": {
        "text": "I design products that"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button14": {
      "custom": {
        "text": "Contact Me"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox125": {
      "custom": {
        "text": "Download resume"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image30": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/arrow-right.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox31": {
      "custom": {
        "text": "📚  Education"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox79": {
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox76": {
      "custom": {
        "text": "MSc, Human Computer Interaction"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox77": {
      "custom": {
        "text": "• 2013-2015"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox78": {
      "custom": {
        "text": "Stanford University"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image17": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/arrow-link.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image38": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/arrow-link.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox157": {
      "custom": {
        "text": "Stanford University"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox158": {
      "custom": {
        "text": "• 2013-2015"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox159": {
      "custom": {
        "text": "MSc, Human Computer Interaction"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox160": {
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image39": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/arrow-link.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox161": {
      "custom": {
        "text": "Stanford University"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox162": {
      "custom": {
        "text": "• 2013-2015"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox163": {
      "custom": {
        "text": "MSc, Human Computer Interaction"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox164": {
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox67": {
      "custom": {
        "text": "💼  Work Experience"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image14": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/arrow-link.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox61": {
      "custom": {
        "text": "Stanford University"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox62": {
      "custom": {
        "text": "• 2013-2015"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox63": {
      "custom": {
        "text": "MSc, Human Computer Interaction"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox66": {
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox152": {
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox149": {
      "custom": {
        "text": "MSc, Human Computer Interaction"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox150": {
      "custom": {
        "text": "• 2013-2015"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox151": {
      "custom": {
        "text": "Stanford University"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image36": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/arrow-link.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox156": {
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox153": {
      "custom": {
        "text": "MSc, Human Computer Interaction"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox154": {
      "custom": {
        "text": "• 2013-2015"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox155": {
      "custom": {
        "text": "Stanford University"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image37": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/arrow-link.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox92": {
      "custom": {
        "text": "Get in touch"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox93": {
      "custom": {
        "text": "Lorem ipsum sit amet consectetur adipiscing elit mattis faucibus odio arc dolor."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image21": {
      "custom": {
        "alt": "linkedin",
        "src": "/app-assets/LinkedIn%20logo.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image22": {
      "custom": {
        "alt": "linkedin",
        "src": "/app-assets/Twitter%20logo.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button9": {
      "custom": {
        "text": "Submit"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Input1": {
      "custom": {
        "value": "",
        "placeholder": ""
      },
      "callbacks": {}
    },
    "TextBox94": {
      "custom": {
        "text": "Name"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox97": {
      "custom": {
        "text": "Email"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Input4": {
      "custom": {
        "value": "",
        "placeholder": ""
      },
      "callbacks": {}
    },
    "TextBox98": {
      "custom": {
        "text": "Message"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Input5": {
      "custom": {
        "value": "",
        "placeholder": ""
      },
      "callbacks": {}
    }
  },
  "view_project": {
    "Flex232": {
      "callbacks": {}
    },
    "Flex229": {
      "callbacks": {}
    },
    "Flex324": {
      "callbacks": {}
    },
    "Flex322": {
      "callbacks": {}
    },
    "Flex320": {
      "callbacks": {}
    },
    "Flex317": {
      "callbacks": {}
    },
    "Flex321": {
      "callbacks": {}
    },
    "Flex318": {
      "callbacks": {}
    },
    "Flex319": {
      "callbacks": {}
    },
    "Flex313": {
      "callbacks": {}
    },
    "Flex314": {
      "callbacks": {}
    },
    "Flex315": {
      "callbacks": {}
    },
    "Flex316": {
      "callbacks": {}
    },
    "TextBox169": {
      "custom": {
        "text": "View Project"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image43": {
      "custom": {
        "alt": "No preview available"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image42": {
      "custom": {
        "alt": "play",
        "src": "/app-assets/play.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox182": {
      "custom": {
        "text": "Run test"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox251": {
      "custom": {
        "text": "INPUT"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Upload8": {
      "custom": {
        "multiple": false,
        "showFilename": false,
        "text": "Upload Image",
        "disabled": false
      },
      "callbacks": {
        "onChange": [
          {
            "sendFile": {
              "self": true,
              "props": [
                "io",
                "files"
              ]
            }
          }
        ]
      }
    },
    "Image51": {
      "custom": {
        "alt": "icon",
        "src": "/app-assets/File%20upload.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox247": {
      "custom": {
        "text": "Museumstraat 1, 1071 XX Amsterdam, Netherlands"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox248": {
      "custom": {
        "text": "October 10, 1632"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox249": {
      "custom": {
        "text": "RIJKS101632"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox250": {
      "custom": {
        "text": "Johannes Vermeer"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button43": {
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox243": {
      "custom": {
        "text": "Address"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox244": {
      "custom": {
        "text": "Date of Birth"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button44": {
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox245": {
      "custom": {
        "text": "License no."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button45": {
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox246": {
      "custom": {
        "text": "Name"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button46": {
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    }
  },
  "view_page": {
    "Flex312": {
      "callbacks": {}
    },
    "Flex286": {
      "callbacks": {}
    },
    "Flex284": {
      "callbacks": {}
    },
    "Flex278": {
      "callbacks": {}
    },
    "Flex279": {
      "callbacks": {}
    },
    "Flex280": {
      "callbacks": {}
    },
    "Flex282": {
      "callbacks": {}
    },
    "Flex285": {
      "callbacks": {}
    },
    "Flex283": {
      "callbacks": {}
    },
    "Flex288": {
      "callbacks": {}
    },
    "Flex287": {
      "callbacks": {}
    },
    "Flex336": {
      "callbacks": {}
    },
    "Flex330": {
      "callbacks": {}
    },
    "Flex351": {
      "callbacks": {}
    },
    "TextBox242": {
      "custom": {
        "text": "INPUT"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button30": {
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox216": {
      "custom": {
        "text": "Name"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button31": {
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox217": {
      "custom": {
        "text": "License no."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button33": {
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox219": {
      "custom": {
        "text": "Date of Birth"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox223": {
      "custom": {
        "text": "Address"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button34": {
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox220": {
      "custom": {
        "text": "Output"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox221": {
      "custom": {
        "text": "Output"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox222": {
      "custom": {
        "text": "Output"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox224": {
      "custom": {
        "text": "Output"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image47": {
      "custom": {
        "alt": "icon",
        "src": "/app-assets/File%20upload.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Upload4": {
      "custom": {
        "multiple": false,
        "showFilename": false,
        "text": "Upload Image",
        "disabled": false
      },
      "callbacks": {
        "onChange": [
          {
            "sendFile": {
              "self": true,
              "props": [
                "io",
                "files"
              ]
            }
          }
        ]
      }
    },
    "TextBox252": {
      "custom": {
        "text": "Examples"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button48": {
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button51": {
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button52": {
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox264": {
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    }
  },
  "sg": {
    "Flex14": {
      "callbacks": {}
    },
    "Flex16": {
      "callbacks": {}
    },
    "Flex19": {
      "callbacks": {}
    },
    "Flex22": {
      "callbacks": {}
    },
    "Flex20": {
      "callbacks": {}
    },
    "Flex23": {
      "callbacks": {}
    },
    "Flex21": {
      "callbacks": {}
    },
    "Flex24": {
      "callbacks": {}
    },
    "Flex26": {
      "callbacks": {}
    },
    "Flex27": {
      "callbacks": {}
    },
    "Flex34": {
      "callbacks": {}
    },
    "Flex35": {
      "callbacks": {}
    },
    "Flex36": {
      "callbacks": {}
    },
    "Flex38": {
      "callbacks": {}
    },
    "Flex44": {
      "callbacks": {}
    },
    "Flex28": {
      "callbacks": {}
    },
    "TextBox15": {
      "custom": {
        "text": "Skills"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox16": {
      "custom": {
        "text": "Design that solves problems,"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox17": {
      "custom": {
        "text": "one product at a time."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image3": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/1.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox20": {
      "custom": {
        "text": "What I can do for you"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox23": {
      "custom": {
        "text": "Faster, better products that your users love. Here's all the services I provide:"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox33": {
      "custom": {
        "text": "Web and Mobile App Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox34": {
      "custom": {
        "text": " Design Strategy"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox35": {
      "custom": {
        "text": " Front-end Development"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image4": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/3.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox21": {
      "custom": {
        "text": "What you can expect"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox24": {
      "custom": {
        "text": "Every designer needs the right tools to do the perfect job. Thankfully, I'm multilingual."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox36": {
      "custom": {
        "text": "Figma"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox37": {
      "custom": {
        "text": "Sketch"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox38": {
      "custom": {
        "text": "Webflow"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox31": {
      "custom": {
        "text": "I design products that are more than pretty. I make them shippable and usable."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox32": {
      "custom": {
        "text": "Applications I'm fluent in"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image5": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/2.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox39": {
      "custom": {
        "text": "Efficient and maintainable"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox40": {
      "custom": {
        "text": "Clean and functional"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox41": {
      "custom": {
        "text": "Device and user friendly"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox48": {
      "custom": {
        "text": "Design tips for designers, that cover everything you need"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox51": {
      "custom": {
        "text": "April 16, 2021 6 mins"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox49": {
      "custom": {
        "text": "How to build rapport with your web design clients"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox52": {
      "custom": {
        "text": "April 16, 2021 5 mins"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox50": {
      "custom": {
        "text": "Top 6 free website mockup tools 2021"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox53": {
      "custom": {
        "text": "April 16, 2021 5 mins"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox56": {
      "custom": {
        "text": "April 16, 2021 7 mins"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox57": {
      "custom": {
        "text": "Logo design trends to avoid in 2021"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox68": {
      "custom": {
        "text": "22 best UI design tools"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox69": {
      "custom": {
        "text": "April 16, 2021 7 mins"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox43": {
      "custom": {
        "text": "Projects"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox44": {
      "custom": {
        "text": "Latest Projects"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    }
  }
}};

useStore.setState(desktopModeProps);

export default useStore;
