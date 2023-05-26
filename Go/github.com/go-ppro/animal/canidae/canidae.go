package canidae

import "../../../animal"

type Canidae interface {
	animal.Animal
	Run()
	Howl()
}
