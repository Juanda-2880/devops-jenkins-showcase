import { Header } from "./components/Header";

function App() {
  const participants = [
    {
      name: "Juan David Pacheco Vargas",
      image: "/images/JuanPacheco.jpeg",
    },
    {
      name: "Angela Camila Quitiaquez Diaz",
      image: "/images/Angela.png",
    },
  ];

  return (
    <main className="min-h-screen bg-jenkins-bg text-jenkins-text">
      <Header />

      <section className="bg-jenkins-red px-4 md:px-8 lg:px-16 pt-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex h-[450px] flex-col items-center justify-center text-center text-white">
            <h1 className="font-raleway text-6xl font-black md:text-8xl tracking-tight drop-shadow-xl uppercase">
              EXPLORANDO <span className="opacity-80 font-light">JENKINS</span>
            </h1>
            <div className="mt-8 h-1.5 w-24 bg-white rounded-full opacity-50"></div>
            <p className="mt-8 max-w-4xl font-raleway text-xl font-bold tracking-wide text-white md:text-2xl">
              Descubriendo el máximo potencial de la automatización y la integración continua
            </p>
          </div>
        </div>
      </section>

      <section id="que-es" className="mx-auto max-w-7xl px-4 py-24 md:px-8 lg:px-16 scroll-mt-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <h2 className="font-raleway text-3xl font-bold text-jenkins-red md:text-4xl">
              ¿Qué es Jenkins?
            </h2>
            <div className="mt-6 space-y-4 font-open-sans text-lg text-gray-700 leading-relaxed">
              <p>
                Jenkins es el servidor de automatización de código abierto líder en el mundo. 
                Es una herramienta esencial para el desarrollo de software moderno, permitiendo 
                a los equipos automatizar las partes relacionadas con el desarrollo, las pruebas 
                y el despliegue.
              </p>
              <p>
                Originalmente creado como el proyecto Hudson, Jenkins facilita la Integración 
                Continua (CI) y la Entrega Continua (CD), lo que ayuda a reducir el tiempo de 
                comercialización y mejora la calidad del código mediante la automatización de 
                tareas repetitivas.
              </p>
              <div className="pt-4">
                <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {[
                    "Código Abierto (MIT)",
                    "Extensible por Plugins",
                    "Fácil Instalación",
                    "Gran Comunidad",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-jenkins-red text-[10px] text-white">
                        ✓
                      </span>
                      <span className="text-gray-600 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative group max-w-sm">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-jenkins-red to-red-400 opacity-25 blur transition duration-1000 group-hover:opacity-50"></div>
              <img
                src="/images/queesjenkins.png"
                alt="Diagrama de Jenkins"
                className="relative rounded-xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.02] border border-gray-100"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="como-funciona" className="bg-white py-24 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16">
          <div className="text-center">
            <h2 className="font-raleway text-3xl font-bold text-jenkins-red md:text-4xl">
              ¿Cómo funciona Jenkins?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl font-open-sans text-lg text-gray-600">
              Jenkins utiliza una arquitectura robusta y un sistema de automatización basado en código para gestionar el ciclo de vida del software.
            </p>
          </div>

          <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="flex justify-center">
              <img
                src="/images/comofunciona.png"
                alt="Funcionamiento de Jenkins"
                className="rounded-xl border-4 border-jenkins-red/10 shadow-xl"
              />
            </div>
            
            <div className="space-y-10">
              <div className="relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-jenkins-red">
                <h3 className="font-raleway text-2xl font-bold text-gray-900">
                  El Pipeline de Jenkins
                </h3>
                <p className="mt-3 font-open-sans text-gray-600 leading-relaxed">
                  Un Pipeline es un conjunto de plugins que permite la implementación y la integración de pipelines de entrega continua en Jenkins. Se define mediante código (Jenkinsfile), lo que permite que sea versionado y compartido.
                </p>
                <ul className="mt-4 space-y-2 text-sm font-semibold text-jenkins-red">
                  <li>• Declarative vs Scripted Syntax</li>
                  <li>• Etapas: Build, Test, Deploy</li>
                  <li>• Visualización del flujo de trabajo</li>
                </ul>
              </div>

              <div className="relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-jenkins-red">
                <h3 className="font-raleway text-2xl font-bold text-gray-900">
                  Modelo Controller/Agent
                </h3>
                <p className="mt-3 font-open-sans text-gray-600 leading-relaxed">
                  Jenkins utiliza un modelo distribuido. El <strong>Controller</strong> maneja la configuración, la interfaz de usuario y la programación de tareas, mientras que los <strong>Agents</strong> (nodos) ejecutan los trabajos pesados de compilación y pruebas.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded bg-jenkins-red/5 px-3 py-1 text-xs font-bold text-jenkins-red uppercase tracking-wider">Escalabilidad</span>
                  <span className="rounded bg-jenkins-red/5 px-3 py-1 text-xs font-bold text-jenkins-red uppercase tracking-wider">Seguridad</span>
                  <span className="rounded bg-jenkins-red/5 px-3 py-1 text-xs font-bold text-jenkins-red uppercase tracking-wider">Aislamiento</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="plugins" className="bg-jenkins-bg py-24 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16">
          <div className="text-center">
            <h2 className="font-raleway text-3xl font-bold text-jenkins-red md:text-4xl">
              Poder Infinito con Plugins
            </h2>
            <p className="mx-auto mt-4 max-w-2xl font-open-sans text-lg text-gray-600">
              El verdadero poder de Jenkins reside en su extensibilidad. Con más de 1,800 plugins, puedes integrar casi cualquier herramienta.
            </p>
          </div>

          <div className="mt-16 grid gap-12 lg:grid-cols-2">
            {/* Cómo funciona un Plugin */}
            <div className="rounded-2xl bg-white p-8 shadow-sm border-t-4 border-jenkins-red">
              <h3 className="font-raleway text-2xl font-bold text-gray-900">
                ¿Cómo funciona un Plugin?
              </h3>
              <p className="mt-4 font-open-sans text-gray-600 leading-relaxed">
                Los plugins son paquetes autocontenidos (archivos <code className="bg-gray-100 px-1 rounded text-jenkins-red">.hpi</code> o <code className="bg-gray-100 px-1 rounded text-jenkins-red">.jpi</code>) que se cargan en la JVM de Jenkins. Utilizan <strong>Extension Points</strong> para añadir nuevas funcionalidades sin modificar el núcleo.
              </p>
              <div className="mt-6 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-jenkins-red/10 text-jenkins-red">
                    <span className="text-[10px]">▶</span>
                  </div>
                  <p className="text-sm text-gray-600"><strong>Extension Points:</strong> Permiten a los desarrolladores "engancharse" a procesos existentes como compilaciones o reportes.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-jenkins-red/10 text-jenkins-red">
                    <span className="text-[10px]">▶</span>
                  </div>
                  <p className="text-sm text-gray-600"><strong>Update Center:</strong> Jenkins se conecta a un repositorio central para descargar e instalar plugins automáticamente.</p>
                </div>
              </div>
            </div>

            {/* Plugins más usados */}
            <div className="rounded-2xl bg-white p-8 shadow-sm border-t-4 border-jenkins-red">
              <h3 className="font-raleway text-2xl font-bold text-gray-900">
                Plugins más usados
              </h3>
              <div className="mt-6 grid grid-cols-2 gap-4">
                {[
                  { name: "Git", desc: "Integración con repositorios" },
                  { name: "Docker", desc: "Contenedores en el build" },
                  { name: "Pipeline", desc: "Flujos de trabajo como código" },
                  { name: "Blue Ocean", desc: "Nueva interfaz moderna" },
                  { name: "Slack", desc: "Notificaciones en tiempo real" },
                  { name: "SonarQube", desc: "Análisis de calidad" },
                ].map((plugin) => (
                  <div key={plugin.name} className="group rounded-lg border border-gray-100 p-3 transition-colors hover:bg-jenkins-red/5">
                    <h4 className="font-bold text-jenkins-red">{plugin.name}</h4>
                    <p className="text-xs text-gray-500">{plugin.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <h4 className="font-raleway text-sm font-bold uppercase tracking-wider text-gray-400">¿Cómo Integrarlos?</h4>
                <ol className="mt-3 space-y-2 text-sm text-gray-600">
                  <li>1. Ve a <strong>Administrar Jenkins</strong> {">"} <strong>Plugins</strong>.</li>
                  <li>2. Busca el plugin en la pestaña <strong>Available</strong>.</li>
                  <li>3. Haz clic en <strong>Install without restart</strong>.</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="ventajas" className="bg-white py-24 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="font-raleway text-3xl font-bold text-jenkins-red md:text-4xl">
                Ventajas y Desventajas
              </h2>
              <p className="mt-4 font-open-sans text-lg text-gray-600">
                Como cualquier herramienta, Jenkins tiene sus fortalezas y sus retos. Aquí te presentamos un análisis honesto.
              </p>

              <div className="mt-10 grid gap-8 sm:grid-cols-2">
                {/* Ventajas */}
                <div className="space-y-4">
                  <h3 className="flex items-center gap-2 font-raleway text-xl font-bold text-jenkins-green">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-jenkins-green/10 text-sm">+</span>
                    Ventajas
                  </h3>
                  <ul className="space-y-3 text-sm text-gray-600">
                    <li className="flex gap-2"><strong>•</strong> Ecosistema de plugins inigualable.</li>
                    <li className="flex gap-2"><strong>•</strong> Totalmente gratuito y de código abierto.</li>
                    <li className="flex gap-2"><strong>•</strong> Gran comunidad y soporte documental.</li>
                    <li className="flex gap-2"><strong>•</strong> Altamente personalizable y flexible.</li>
                  </ul>
                </div>

                {/* Desventajas */}
                <div className="space-y-4">
                  <h3 className="flex items-center gap-2 font-raleway text-xl font-bold text-jenkins-red">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-jenkins-red/10 text-sm">-</span>
                    Desventajas
                  </h3>
                  <ul className="space-y-3 text-sm text-gray-600">
                    <li className="flex gap-2"><strong>•</strong> Interfaz de usuario que puede sentirse anticuada.</li>
                    <li className="flex gap-2"><strong>•</strong> Requiere mantenimiento manual constante.</li>
                    <li className="flex gap-2"><strong>•</strong> Curva de aprendizaje inicial pronunciada.</li>
                    <li className="flex gap-2"><strong>•</strong> "Plugin hell": conflictos entre versiones.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <div className="absolute -right-4 -top-4 h-64 w-64 rounded-full bg-jenkins-red/5 blur-3xl"></div>
              <img
                src="/images/ventajasydesventajas.png"
                alt="Pros y Contras de Jenkins"
                className="relative max-w-xs rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="participantes" className="bg-jenkins-bg py-24 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16">
          <h2 className="text-center font-raleway text-3xl font-bold text-jenkins-red md:text-4xl tracking-tighter">
            Participantes
          </h2>
          <div className="mt-16 flex flex-wrap justify-center gap-12">
            {participants.map((person) => (
              <div key={person.name} className="group relative flex flex-col items-center">
                <div className="relative h-48 w-48 overflow-hidden rounded-full border-4 border-white shadow-xl transition-transform duration-500 group-hover:scale-105">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-jenkins-red/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                </div>
                <div className="mt-6 text-center">
                  <h3 className="font-raleway text-xl font-bold text-gray-900">{person.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-jenkins-red py-12 text-center text-white/60">
        <div className="mx-auto max-w-7xl px-4">
          {/* Footer content removed */}
        </div>
      </footer>
    </main>
  );
}

export default App;
