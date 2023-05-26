package muridae

import "../animal"

type Muridae interface {
	animal.Animal
	Hole()
	Steal()
}
