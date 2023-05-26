package felidae

import "../../animal"

type Felidae interface {
	animal.Animal
	Climb()
	Sneak()
}
