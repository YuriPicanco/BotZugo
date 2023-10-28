import { storage } from '../storage.js'
import { VenomBot } from '../venom.js'
import { STAGES } from './index.js'

export const initialStage = {
  async exec({ from }) {
    storage[from].stage = STAGES.MENU

    const venombot = await VenomBot.getInstance()

    const message = `
      👋 Olá. Eu sou Zugo, o "Assistente Virtual" da ${venombot.getSessionName}.
      Somos uma equipe especializada em produção de vídeo, fotografia, e edição. 📽️
      Queremos ser sua produtora de vídeo de confiança e estamos à disposição para responder a perguntas ou discutir projetos. 🚀
      
      *Posso te ajudar?* 🙋‍♂️
      -----------------------------------
      1️⃣ - ESCOLHER PACOTE
      2️⃣ - FORMAS DE PAGAMENTO
      0️⃣ - FALAR COM ATENDENTE
    `
    await venombot.sendText({ to: from, message })
  },
}
