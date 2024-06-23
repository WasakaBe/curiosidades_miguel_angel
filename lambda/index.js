const Alexa = require('ask-sdk-core');

const data = {
    'es-ES': [
        'Fundador del Cártel de Guadalajara: Miguel Ángel Félix Gallardo es reconocido por haber fundado el Cártel de Guadalajara en los años 1980, que fue uno de los primeros cárteles de droga en México.',
        'Apodado "El Jefe de Jefes": Su apodo refleja su posición de poder y respeto en el mundo del narcotráfico, siendo considerado una figura central en la organización de narcotraficantes en México.',
        'Antiguo Policía Judicial Federal: Antes de entrar en el mundo del narcotráfico, Félix Gallardo trabajó como policía judicial federal en México, lo que le proporcionó conocimientos y contactos útiles para su futura carrera criminal.',
        'Detención y Condena: Fue arrestado en 1989 y condenado a 37 años de prisión por su participación en el tráfico de drogas y el asesinato del agente de la DEA Enrique "Kiki" Camarena.',
        'Cambio de Estrategia: A diferencia de muchos narcotraficantes de su tiempo, Félix Gallardo prefirió mantenerse en la sombra, evitando el estilo de vida ostentoso y llamativo que muchos de sus contemporáneos adoptaron.',
        'Reorganización del Narcotráfico Mexicano: Tras su arresto, se dice que Félix Gallardo reestructuró el tráfico de drogas en México, dividiendo el control del negocio entre diferentes líderes de cárteles, lo que dio origen a organizaciones como el Cártel de Sinaloa y el Cártel de Tijuana.',
        'Red de Corrupción: Durante su tiempo en el poder, estableció una vasta red de corrupción que incluía a políticos, fuerzas del orden y funcionarios gubernamentales, lo que le permitió operar con relativa impunidad durante muchos años.',
        'Impacto Cultural: La vida y las actividades de Félix Gallardo han sido retratadas en varias series y películas, destacando su papel en la historia del narcotráfico en México. Su personaje ha aparecido en producciones como la serie "Narcos: México" de Netflix.'
    ],
    'en-US': [
        'Founder of the Guadalajara Cartel: Miguel Ángel Félix Gallardo is recognized for having founded the Guadalajara Cartel in the 1980s, which was one of the first drug cartels in Mexico.',
        'Nicknamed "The Boss of Bosses": His nickname reflects his position of power and respect in the drug trafficking world, being considered a central figure in the organization of drug traffickers in Mexico.',
        'Former Federal Judicial Police Officer: Before entering the world of drug trafficking, Félix Gallardo worked as a federal judicial police officer in Mexico, which provided him with useful knowledge and contacts for his future criminal career.',
        'Arrest and Conviction: He was arrested in 1989 and sentenced to 37 years in prison for his involvement in drug trafficking and the murder of DEA agent Enrique "Kiki" Camarena.',
        'Strategy Shift: Unlike many drug traffickers of his time, Félix Gallardo preferred to stay in the shadows, avoiding the ostentatious and flashy lifestyle that many of his contemporaries adopted.',
        'Reorganization of Mexican Drug Trafficking: After his arrest, it is said that Félix Gallardo restructured drug trafficking in Mexico, dividing control of the business among different cartel leaders, giving rise to organizations such as the Sinaloa Cartel and the Tijuana Cartel.',
        'Network of Corruption: During his time in power, he established a vast network of corruption that included politicians, law enforcement, and government officials, allowing him to operate with relative impunity for many years.',
        'Cultural Impact: The life and activities of Félix Gallardo have been portrayed in various series and films, highlighting his role in the history of drug trafficking in Mexico. His character has appeared in productions such as the Netflix series "Narcos: Mexico."'
    ]
};

const GetRandomFactHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'FrasesIntent';
    },
    handle(handlerInput) {
        const locale = handlerInput.requestEnvelope.request.locale;
        const factArr = data[locale] || data['es-ES'];
        const factIndex = Math.floor(Math.random() * factArr.length);
        const randomFact = factArr[factIndex];
        const speakOutput = randomFact;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt('Puedes pedirme otro dato curioso diciendo, dame un dato curioso del jefe de jefes')
            .getResponse();
    }
};

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        const locale = handlerInput.requestEnvelope.request.locale;
        const welcomeMessage = locale.startsWith('es') ? 'Bienvenido! Dame un dato interesante del jefe de jefes.' : 'Welcome! Give me an interesting fact about the boss of bosses.';

        return handlerInput.responseBuilder
            .speak(welcomeMessage)
            .reprompt(welcomeMessage)
            .getResponse();
    }
};

const HelloWorldIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'HelloWorldIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Hello World!';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const locale = handlerInput.requestEnvelope.request.locale;
        const helpMessage = locale.startsWith('es') ? 'Puedes pedirme un dato curioso sobre Miguel Ángel Félix Gallardo diciendo, dame un dato curioso del jefe de jefes. ¿Cómo te puedo ayudar?' : 'You can ask me for a fact about Miguel Ángel Félix Gallardo by saying, give me a fact about the boss of bosses. How can I help?';

        return handlerInput.responseBuilder
            .speak(helpMessage)
            .reprompt(helpMessage)
            .getResponse();
    }
};

const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const locale = handlerInput.requestEnvelope.request.locale;
        const goodbyeMessage = locale.startsWith('es') ? '¡Adiós!' : 'Goodbye!';

        return handlerInput.responseBuilder
            .speak(goodbyeMessage)
            .getResponse();
    }
};

const FallbackIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.FallbackIntent';
    },
    handle(handlerInput) {
        const locale = handlerInput.requestEnvelope.request.locale;
        const fallbackMessage = locale.startsWith('es') ? 'Lo siento, no sé sobre eso. Por favor intenta de nuevo.' : 'Sorry, I don\'t know about that. Please try again.';

        return handlerInput.responseBuilder
            .speak(fallbackMessage)
            .reprompt(fallbackMessage)
            .getResponse();
    }
};

const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        console.log(`~~~~ Session ended: ${JSON.stringify(handlerInput.requestEnvelope)}`);
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse(); // notice we send an empty response
    }
};

const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = Alexa.getIntentName(handlerInput.requestEnvelope);
        const speakOutput = `You just triggered ${intentName}`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        const locale = handlerInput.requestEnvelope.request.locale;
        const errorMessage = locale.startsWith('es') ? 'Lo siento, tuve problemas para hacer lo que pediste. Por favor intenta de nuevo.' : 'Sorry, I had trouble doing what you asked. Please try again.';
        console.log(`~~~~ Error handled: ${JSON.stringify(error)}`);

        return handlerInput.responseBuilder
            .speak(errorMessage)
            .reprompt(errorMessage)
            .getResponse();
    }
};

exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        HelloWorldIntentHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        FallbackIntentHandler,
        SessionEndedRequestHandler,
        GetRandomFactHandler,
        IntentReflectorHandler)
    .addErrorHandlers(
        ErrorHandler)
    .withCustomUserAgent('sample/hello-world/v1.2')
    .lambda();
