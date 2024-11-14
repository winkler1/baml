class One {
  f int
}

// Already existing name.
type One = int

// Unexpected keyword.
typpe Two = float

// error: Error validating: Unexpected keyword used in assignment: typpe
//   -->  class/invalid_type_aliases.baml:9
//    | 
//  8 | // Unexpected keyword.
//  9 | typpe Two = float
//    | 
// error: The type_alias "One" cannot be defined because a class with that name already exists.
//   -->  class/invalid_type_aliases.baml:6
//    | 
//  5 | // Already existing name.
//  6 | type One = int
//    | 
