# Server architecture document

@startuml firstDiagram
  Route -> Controller
  Controller -> Repository
  Repository -> Model
@enduml
